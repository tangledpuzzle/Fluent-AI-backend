import config
from app.utils.db.connect import db
from app.utils.mail import send_email
from app.utils.string_utils import getShortUUID
from .utils import check_email_exist, gen_hash, get_token, get_unique_id
from config import LOGIN_TYPES
from app.mail_contents.sign_up import sign_up_mail, sign_up_mail_subject
from string import Template
from starlette.responses import JSONResponse
from app.referrals.add_referral_info import add_referral_info
from datetime import datetime

def signup(inp):
    try:
        email = inp.email.lower()
        email_check = check_email_exist(email)
        # referral_user_id = inp.referal_id

        if email_check:
            return JSONResponse(status_code=403,
                                content={"success": False, "error": "Email already taken",
                                         })
        print(2)
        password = gen_hash(inp.password).decode('utf-8')
        user_id = str(get_unique_id())
        print(3)
        user = {
            # "first_name": "",
            # "last_name": "",s
            "email": email,
            "password": password,
            # "image": '',
            "login_method": LOGIN_TYPES["password"],
            "email_verified": False,
            "id": user_id,
            "referral_id": str(getShortUUID()),
            "created_date": datetime.utcnow(),
            "updated_date": datetime.utcnow()
        }
        # print(inp.first_name)

        # if inp.first_name:
        #     user["first_name"] = inp.first_name

        # if inp.last_name:
        #     user["last_name"] = inp.last_name
        data = db['users'].insert_one(user)

        # print(data.inserted_id)
        # mail_content = Template(sign_up_mail)
        # token = get_token({
        #     "email": email
        # }, config.LOGIN_EMAIL_VERIFY_TIME)

        # link = config.FRONTEND_URL + config.FRONTEND_VERIFY_PAGE + '?k=' + token

        # mail_content = mail_content.substitute(first_name=inp.first_name, last_name=inp.last_name, link=link)

        # send_email(email, sign_up_mail_subject, mail_content)

        # if referral_user_id:
            # add_referral_info(referral_user_id, user_id)

        return {
            "success": True,
            "message": "User successfully registered"
        }


    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
