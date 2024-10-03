from app.utils.db.connect import db
from starlette.responses import JSONResponse


def get_user_fluency(req):
    try:
        user = req.state.user
        print(user["id"])
        data = db["language_fluency"].find({"userId": user["id"]},{"_id":0})
        data = list(data)

        return {
            "success": True,
            "data": data
        }


    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
