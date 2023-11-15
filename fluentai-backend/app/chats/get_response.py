import json

from starlette.responses import JSONResponse
import tempfile
from config import AUDIO_FILE_PATH, DEEPGRAM_CHINESE_LANG_CODE, DEEPGRAM_SPANISH_LANG_CODE, LANGUAGE_MAPPING, \
    FLUENCY_LEVEL_MAPPING, LANGUAGE_NAMES, FLUENCY_LEVELS
from app.utils.string_utils import get_unique_id
from app.utils.db.connect import db
from app.utils.s3 import upload_and_get_signed_url
import asyncio
from app.utils.transcribe import transcribe
from .process_chat import chat


def get_chat_response(req, file, language, message, is_reset):
    try:
        audio = file
        # contents = asyncio.run(audio.read())
        user_id = req.state.user["id"]
        # user_id = "1234567890"
        file_path = AUDIO_FILE_PATH + '/' + user_id + '/' + str(language) + '/' + get_unique_id() + '.mp3'
        print(file_path)
        
        audio_url = ""
        audio_data = ""
        language_string = LANGUAGE_MAPPING[language]
        language_name = LANGUAGE_NAMES[language]
        print(file_path)
        # with tempfile.NamedTemporaryFile() as temp_file:
        #     temp_file.write(contents)
        #     temp_file.seek(0)

        if audio:
            print("in")
            audio_url = asyncio.run(upload_and_get_signed_url(audio, file_path))

            if not audio_url:
                return {
                    "success": False,
                    "error": "Unable to transcribe your audio, please try again "
                }
        print("audio_url", audio_url)

        # audio_url = "https://fluent-ai-dev.s3.ap-south-1.amazonaws.com/audio/Chinese-Mandarin-female-voiceover-sample.mp3"
        if audio_url:
            audio_data = transcribe(audio_url, language_string)
            if not audio_data:
                return JSONResponse(status_code=403,
                                    content={"success": False, "error": "Unable to transcribe voice",
                                             })
            print('audio_utl', audio_url)
        user_fluency = db["language_fluency"].find_one({"language_id": language, "userId": user_id})
        if not user_fluency:
            user_fluency = {
                "fluency_level": FLUENCY_LEVELS["advanced"]
            }
            # return JSONResponse(status_code=403,
            #                     content={"success": False, "error": "User's fluency is not set for this language",
            #                              })

        user_fluency = FLUENCY_LEVEL_MAPPING[user_fluency["fluency_level"]]

        if audio and audio_url and "text" in audio_data:
            message = audio_data["text"]

            if not message:
                return JSONResponse(status_code=403,
                                    content={"success": False, "error": "Unable to transcribe voice, transcribed voice is empty",
                                             })

            audio_data["path"] = file_path
            print("message", message)
        chat_data = chat(user_id, message, user_fluency, is_reset, language, language_name, audio_url, audio_data)
        print("chat_data", chat_data)
        if not chat_data["success"]:
            return chat_data

        return {
            "success": True,
            "msg": chat_data["data"]["content"],
            "input_msg" : message
        }

    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
