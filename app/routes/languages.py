from fastapi import APIRouter, Depends, Request
from typing import Any
from app.language.get_languages import get_languages, get_fluency_levels
from app.language.set_fluency import set_fluency
from app.language.get_user_fluency import get_user_fluency
from app.language.set_default import set_user_default_language
from app.language.get_default import get_user_default_language

from app.validations.languages import SetFluency,SetDefaultLanguage
from app.user.auth import validate_token

router = APIRouter()


@router.get('/get-languages', dependencies=[Depends(validate_token)])
def get_langs(req: Request):
    try:
        result = get_languages()
        return result
    except Exception as e:
        print("error", str(e))


@router.get('/get-fluency-levels', dependencies=[Depends(validate_token)])
def get_fluency(req: Request):
    try:
        result = get_fluency_levels()
        return result
    except Exception as e:
        print("error", str(e))


@router.post('/set-fluency', dependencies=[Depends(validate_token)])
def set_fluency_lang(req: Request, inp: SetFluency):
    try:
        result = set_fluency(req, inp)
        return result
    except Exception as e:
        print("error", str(e))


@router.get('/get-user-fluency', dependencies=[Depends(validate_token)])
def get_fluency_user(req: Request):
    try:
        result = get_user_fluency(req)
        return result
    except Exception as e:
        print("error", str(e))

@router.post('/set-default', dependencies=[Depends(validate_token)])
def set_fluency_lang(req: Request, inp: SetDefaultLanguage):
    try:
        result = set_user_default_language(req, inp)
        return result
    except Exception as e:
        print("error", str(e))


@router.get('/get-default', dependencies=[Depends(validate_token)])
def get_fluency_user(req: Request):
    try:
        result = get_user_default_language(req)
        return result
    except Exception as e:
        print("error", str(e))