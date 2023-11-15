from config import FRONTEND_URL, FRONTEND_SIGNUP_PAGE
from starlette.responses import JSONResponse
from .utils import get_user_referral_id


def get_referral_link(req):
    try:
        user = req.state.user
        referral_id = get_user_referral_id(user["id"])
        return {
            "success": True,
            "data": FRONTEND_URL + FRONTEND_SIGNUP_PAGE + '?ref=' + referral_id
        }
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
