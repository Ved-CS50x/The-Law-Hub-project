from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class LegalDocumentBase(BaseModel):
    title: str
    content: str
    document_type: str

class LegalDocumentCreate(LegalDocumentBase):
    pass

class LegalDocument(LegalDocumentBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
