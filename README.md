# India Legal Beacon Backend

This is the backend API for the India Legal Beacon application, built with FastAPI.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create a PostgreSQL database named `india_legal_beacon`

3. Run migrations (if needed):
```bash
alembic upgrade head
```

4. Start the server:
```bash
uvicorn app.main:app --reload
```

## API Endpoints

- `/api/example/health` - Health check endpoint
- `/api/example/hello` - Hello world endpoint
- `/api/documents/` - List all legal documents
- `/api/documents/` - Create a new legal document (POST)
- `/api/documents/{id}` - Get a specific legal document

## Database Models

- `LegalDocument`: Stores legal documents with title, content, and type

## Project Structure

```
app/
├── api/              # API routes and endpoints
├── core/            # Core configuration
├── db/              # Database related code
├── models/          # SQLAlchemy models
├── schemas/         # Pydantic schemas
└── main.py          # FastAPI application
```
