from typing import Dict

class Settings:
    PROJECT_NAME: str = "India Legal Beacon"
    API_V1_STR: str = "/api/v1"
    
    # Database settings
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "india_legal_beacon"
    SQLALCHEMY_DATABASE_URI: str = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}/{POSTGRES_DB}"

settings = Settings()
