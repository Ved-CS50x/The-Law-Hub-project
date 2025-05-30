import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from app.api import api_router

app = FastAPI(
    title="The Law Hub",
    description="The Law Hub Web Application",
    version="4.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get absolute path to project root
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Serve static files from the built dist directory
# Serve the built frontend assets
app.mount("/", StaticFiles(directory=os.path.join(PROJECT_ROOT, "india-legal-beacon-main/dist"), html=True), name="static")

# No need for templates since we're serving static files directly

# All routes are handled by the static file server now
# No need for additional route handlers
#added static server routes for both the frontend and the backend