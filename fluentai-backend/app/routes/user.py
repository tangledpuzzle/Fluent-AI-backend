from fastapi import APIRouter,Header
from typing import Any
from app.validations.user import Sign_up, VerifyEmail, Login, GoogleLogin
from app.user.signup import signup
from app.user.verify_email import verify_email
from app.user.login import login
from app.user.googleLogin import google_signup_login
from app.user.logout import logout

router = APIRouter()


@router.post('/signup')
def sign_up(inp: Sign_up):
    try:
        result = signup(inp)
        return result
    except Exception as e:
        print("error", str(e))


@router.post('/verify-email')
def verify(inp: VerifyEmail):
    try:
        result = verify_email(inp)
        return result
    except Exception as e:
        print("error", str(e))


# @app.post('/user/login', dependencies=[Depends(validate_token)])
@router.post('/login')
def verify(inp: Login):
    try:
        result = login(inp)
        return result
    except Exception as e:
        print("error", str(e))


@router.post('/google-login')
def google_login(inp: GoogleLogin):
    try:
        result = google_signup_login(inp)
        return result
    except Exception as e:
        print("error", str(e))


@router.post('/logout')
def logout_user(authorization: str = Header(None)):
    try:
        result = logout(authorization)
        return result
    except Exception as e:
        print("error", str(e))
