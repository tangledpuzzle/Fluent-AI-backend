from .utils import compare_hash, get_user_details, get_token
from config import AUTH_TOKEN_EXPIRY_TIME
from starlette.responses import JSONResponse
from app.utils.redis import set_data


def login(inp):
    try:
        
        email = inp.email.lower()
        user_check = get_user_details(email)
        print(user_check)
        if not user_check:
            return JSONResponse(status_code=403, content={
                "success": False,
                "error": "user not registered"
            })
        # if not user_check["email_verified"]:
        #     return {
        #         "success": False,
        #         "error": "user email not verified"
        #     }
        if not user_check["password"]:
            return JSONResponse(status_code=403, content={
                "success": False,
                "error": "user registered using social login, no password created, reset your password or use google login"
            })

        password_check = compare_hash(user_check["password"].encode('utf-8'), inp.password)

        if not password_check:
            return JSONResponse(status_code=403, content={
                "success": False,
                "error": "Invalid credentials"
            })

        token_data = {
            "email": user_check["email"],
            "id": user_check["id"]
        }

        token = get_token(token_data, AUTH_TOKEN_EXPIRY_TIME)

        set_data(token, str(token_data), AUTH_TOKEN_EXPIRY_TIME)

        del user_check["password"]
        del user_check["_id"]
        return {
            "success": True,
            "data": user_check,
            "token": token
        }
        print('ok')

    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
