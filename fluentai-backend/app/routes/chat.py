from fastapi import APIRouter, Depends, Request, File, UploadFile, Form
from typing import Any
from app.chats.get_response import get_chat_response
from app.validations.chat import ChatAudio, ChatQuery, ChatList, Translate, GetURL, Assessment
from app.user.auth import validate_token
from starlette.responses import JSONResponse
from app.chats.getChats import get_chats
from app.chats.translate import translate_message
from app.chats.get_file_url import get_url
from app.chats.get_assessment import get_assessment

router = APIRouter()


@router.post('/response', dependencies=[Depends(validate_token)])
def response(req: Request, file: UploadFile = Form(None), language: int = Form(), message: str = Form(None),
             is_reset: int = Form(None)) -> Any:
    try:
        # print("here", file,language,message)
        result = get_chat_response(req, file, language, message, is_reset)
        return result
    except Exception as e:
        print("error", str(e))
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})


@router.get('/list', dependencies=[Depends(validate_token)])
def get_chat(req: Request, req_data: ChatList = Depends()):
    try:
        result = get_chats(req, req_data)
        return result
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})


@router.post('/translate', dependencies=[Depends(validate_token)])
def response(req: Request, inp: Translate) -> Any:
    try:
        # print("here", file,language,message)
        result = translate_message(req,inp)
        return result
    except Exception as e:
        print("error", str(e))
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
        
        
@router.post('/assessment', dependencies=[Depends(validate_token)])
def assessment(req: Request, file: UploadFile = Form(None), message: str = Form(None), date: str = Form(None)) -> Any:
    try:
        print("here", file,message,date)
        result = get_assessment(req, file, message, date)
        return result
    except Exception as e:
        print("error", str(e))
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
    


@router.get('/get-url', dependencies=[Depends(validate_token)])
def response(req: Request, inp: GetURL= Depends()) -> Any:
    try:
        # print("here", file,language,message)
        result = get_url(req,inp)
        return result
    except Exception as e:
        print("error", str(e))
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
