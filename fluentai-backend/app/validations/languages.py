from pydantic import BaseModel
from typing import Optional


class SetFluency(BaseModel):
    fluency_level: int
    lang_id: int


class SetDefaultLanguage(BaseModel):
    language: int
