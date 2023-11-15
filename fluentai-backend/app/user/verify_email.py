from app.utils.db.connect import db
from .utils import verify_token
from starlette.responses import JSONResponse
from datetime import datetime


def verify_email(inp):
    try:
        data = verify_token(inp.token)
        if not data:
            return {
                "success": False,
                "error": "link expired"
            }
        db["users"].update_one({"email": data["email"]}, {"$set": {"email_verified": True,"updated_date": datetime.utcnow()}})
        return {
            "success": True,
            "message": "Email verified"
        }
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
