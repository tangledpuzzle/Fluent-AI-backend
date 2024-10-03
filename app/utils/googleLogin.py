from google.oauth2 import id_token
import datetime
from google.auth.transport import requests
from config import GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET
from app.user.auth import CustomHTTPException


def get_google_user_details(token):
    try:
        token_info = id_token.verify_oauth2_token(token, requests.Request())
        print("token_info", token_info)

        if not token_info:
            return {"success": False, "error": "Invalid token"}

        current_time = datetime.datetime.now().timestamp()
        if 'exp' in token_info and token_info['exp'] < current_time:
            return {"success": False, "error": "Token expired"}

        # elif token_info['aud'] != GOOGLE_CLIENT_ID:
        #     return {"success": False, "error": "Token source not valid"}

        print("token_ifo",token_info)
        return {
            "success":True,
            "data":token_info
        }
    except Exception as e:
        print("error",e)
        return {
            "success":False,
            "error":str(e)
        }
