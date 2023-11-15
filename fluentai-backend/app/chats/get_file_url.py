from app.utils.s3 import get_signed_url
from starlette.responses import JSONResponse
from config import AUDIO_FILE_SIGNED_URL_EXPIRY_TIME
from fastapi.responses import RedirectResponse


def get_url(req, inp):
    try:
        path = inp.path
        url = get_signed_url(path,AUDIO_FILE_SIGNED_URL_EXPIRY_TIME)
        # return RedirectResponse(url=url)
        return {
            "success": True,
            "url":url
        }
    except Exception as e:
        print(e)
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
