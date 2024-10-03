import json
from datetime import datetime
from starlette.responses import JSONResponse
import tempfile
from config import AUDIO_FILE_PATH, DEEPGRAM_CHINESE_LANG_CODE, DEEPGRAM_SPANISH_LANG_CODE, LANGUAGE_MAPPING, \
    FLUENCY_LEVEL_MAPPING, LANGUAGE_NAMES, FLUENCY_LEVELS
from app.utils.string_utils import get_unique_id
from app.utils.db.connect import db
from app.utils.s3 import upload_and_get_signed_url
import asyncio
from app.utils.pronunciation_assessment import pronunciation_assessment
from .process_chat import chat


def get_assessment(req, file, message, created_date):
    try:
        
        audio = file
        # contents = asyncio.run(audio.read())
        user_id = req.state.user["id"]
        print(user_id)
        print(created_date)
        # user_id = "1234567890"
        file_path = AUDIO_FILE_PATH + '/' + user_id + '/' + get_unique_id() + '.mp3'
        audio_url = ""
        assessment_result = ""
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
        print("message", message)

        if audio_url:
            assessment_result = pronunciation_assessment(audio_url, message)
            if not assessment_result:
                return JSONResponse(status_code=403,
                                    content={"success": False, "error": "Unable to assess pronunciation",
                                             })
            print("assessment_result")
        # if audio and audio_url and "result" in assessment_result:
        #     message = assessment_result["result"]
        #     if not message:
        #         return JSONResponse(status_code=403,
        #                             content={"success": False, "error": "Unable to assess pronunciation",
        #                                      })
                
        # db["chats"].update_one({"_id": id}, {"$set": {"audio_url": file_path, "assessment_result": assessment_result["result"]}})
        
        # created_date = datetime.strptime(created_date, "%Y-%m-%dT%H:%M:%S.%f")
        # utc_datetime = created_date.utcnow()
        # print(created_date.utcnow())
        db["chats"].update_one({"user_id": user_id, "created_date": created_date}, {"$set": {"is_assessmented": 1}})
        # msg_data = db["chats"].find_one({"user_id": user_id, "created_date": created_date})
        # print(msg_data)
        return {
            "success": True,
            "assessment_result": assessment_result
        }

    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
