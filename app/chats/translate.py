from starlette.responses import JSONResponse
from app.utils.translate import translate_text
from config import LANGUAGE_NAMES


def translate_message(req,inp):
    try:
        message = inp.message
        language = inp.language
        language = LANGUAGE_NAMES[language]
        print("language", language, inp.language)
        print("message", message)
        translated_message = translate_text(message, language)
        if not translated_message["success"]:
            return JSONResponse(status_code=403,
                                content=translated_message)
        return translated_message
    except Exception as e:
        print(e)
        return {
            "success": False,
            "error": str(e)
        }
