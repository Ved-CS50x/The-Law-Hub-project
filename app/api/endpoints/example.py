from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db

router = APIRouter()

@router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "India Legal Beacon API"}

@router.get("/hello")
async def hello():
    return {"message": "Hello from India Legal Beacon API!"}
