from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.legal_document import LegalDocument
from app.schemas.legal_document import LegalDocumentCreate, LegalDocument
from typing import List

router = APIRouter()

@router.get("/", response_model=List[LegalDocument])
async def read_legal_documents(db: Session = Depends(get_db)):
    documents = db.query(LegalDocument).all()
    return documents

@router.post("/", response_model=LegalDocument)
async def create_legal_document(
    document: LegalDocumentCreate,
    db: Session = Depends(get_db)
):
    db_document = LegalDocument(**document.model_dump())
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document

@router.get("/{document_id}", response_model=LegalDocument)
async def read_legal_document(document_id: int, db: Session = Depends(get_db)):
    document = db.query(LegalDocument).filter(LegalDocument.id == document_id).first()
    if document is None:
        raise HTTPException(status_code=404, detail="Document not found")
    return document
