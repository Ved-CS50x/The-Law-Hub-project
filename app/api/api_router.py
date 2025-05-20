from fastapi import APIRouter

api_router = APIRouter()

# Import your API endpoints here
from app.api.endpoints import example, legal_documents

# Add routes directly
api_router.include_router(example.router, prefix="/example", tags=["example"])
api_router.include_router(legal_documents.router, prefix="/documents", tags=["documents"])
