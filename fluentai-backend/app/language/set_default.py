from app.utils.db.connect import db
from starlette.responses import JSONResponse
from config import LANGUAGE_MAPPING

def set_user_default_language(req,inp):
    try:
        user = req.state.user
        language = inp.language
        available_languages = list(LANGUAGE_MAPPING.keys())
        if language not in available_languages:
            return JSONResponse(status_code=403,
                                content={"success": False,
                                         "error": "Invalid language"
                                         })

        print(user["id"])
        data = db["language_default"].update_one({"userId": user["id"]},{"$set":{"language":language}},upsert=True)

        return {
            "success": True
        }


    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
