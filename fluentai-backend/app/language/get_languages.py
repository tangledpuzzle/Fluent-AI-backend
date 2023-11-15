
from app.utils.db.connect import db
from starlette.responses import JSONResponse
from config import FLUENCY_LEVELS


def get_languages():
    try:
        data = db['languages'].find({"active": True}, {"_id": 0})
        data = list(data)
        return {
            "success": True,
            "data": data
        }
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})


def get_fluency_levels():
    try:
        return {
            "success":True,
            "data":FLUENCY_LEVELS
        }
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
