from app.utils.db.connect import db
from starlette.responses import JSONResponse

def get_user_default_language(req):
    try:
        print(req)
        user = req.state.user
        print(user)
        print(user["id"])
        data = db["language_default"].find_one({"userId": user["id"]},{"_id":0})

        return {
            "success": True,
            "data":data
        }


    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
