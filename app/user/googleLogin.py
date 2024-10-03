from app.utils.googleLogin import get_google_user_details
from .utils import get_user_details, get_token, add_user, get_unique_id, update_image
from config import AUTH_TOKEN_EXPIRY_TIME
from config import LOGIN_TYPES
from app.user.auth import CustomHTTPException
from app.utils.string_utils import getShortUUID
from app.utils.redis import set_data
from starlette.responses import JSONResponse
from app.referrals.add_referral_info import add_referral_info
from datetime import datetime


def google_signup_login(req):
    try:
        token = req.token
        user_info = get_google_user_details(token)
        print("user_info",user_info)
        if not user_info or not user_info["success"]:
            return JSONResponse(status_code=500,
                                content=user_info)

        user_info = user_info["data"]
        email = user_info['email']
        image = user_info['picture']
        user_check = get_user_details(email)
        user_id = str(get_unique_id())
        if not user_check:
            user = {
                "first_name": user_info['given_name'],
                "last_name": user_info['family_name'],
                "email": email,
                "password": "",
                "image": image,
                "login_method": LOGIN_TYPES["google"],
                "email_verified": True,
                "id": user_id,
                "referral_id": str(getShortUUID()),
                "created_date": datetime.utcnow(),
                "updated_date": datetime.utcnow()
            }

            add_user(user)
            user_check = user
        else:
            update_image(email, image)

        token_data = {
            "email": user_check["email"],
            "id": user_check["id"]
        }
        token = get_token(token_data, AUTH_TOKEN_EXPIRY_TIME)
        set_data(token, str(token_data), AUTH_TOKEN_EXPIRY_TIME)
        del user_check['password']
        del user_check['_id']

        referral_user_id = req.referal_id
        if referral_user_id:
            add_referral_info(referral_user_id, user_id)



        return {
            "success": True,
            "data": user_check,
            "token": token
        }




    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
