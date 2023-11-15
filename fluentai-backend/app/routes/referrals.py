from fastapi import APIRouter, Depends, Request
from typing import Any
from app.user.auth import validate_token
from app.referrals.getReferalLink import get_referral_link
from app.referrals.getReferedUsers import get_user_list
from app.validations.referrals import UserList

router = APIRouter()


@router.get('/link', dependencies=[Depends(validate_token)])
def get_link(req: Request):
    try:
        result = get_referral_link(req)
        return result
    except Exception as e:
        print("error", str(e))


@router.get('/users', dependencies=[Depends(validate_token)])
def get_user(req: Request, params: UserList = Depends()):
    try:
        result = get_user_list(req, params)
        return result
    except Exception as e:
        print("error", str(e))
