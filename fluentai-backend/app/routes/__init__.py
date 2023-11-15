from fastapi import APIRouter
from . import user, chat,languages,referrals

router = APIRouter()

router.include_router(user.router, prefix="/user")
router.include_router(languages.router, prefix="/languages")
router.include_router(referrals.router, prefix="/referrals")
router.include_router(chat.router, prefix="/chat")