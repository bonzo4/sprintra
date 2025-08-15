import os
from pathlib import Path

try:
    from dotenv import load_dotenv
    env_path = Path(__file__).parent / '.env'
    if env_path.exists():
        load_dotenv(env_path)
except ImportError:
    pass


class Config:    
    AZURE_OPENAI_API_KEY = os.getenv('AZURE_OPENAI_API_KEY')
    AZURE_OPENAI_ENDPOINT = os.getenv('AZURE_OPENAI_ENDPOINT', 'https://sprintra-ai-agents-resource.cognitiveservices.azure.com/')
    AZURE_OPENAI_API_VERSION = os.getenv('AZURE_OPENAI_API_VERSION', '2024-12-01-preview')
    AZURE_OPENAI_DEPLOYMENT = os.getenv('AZURE_OPENAI_DEPLOYMENT', 'sprintra-generate-project-ai')
    AZURE_OPENAI_MODEL = os.getenv('AZURE_OPENAI_MODEL', 'gpt-5-mini')
    
    GOOGLE_GENAI_API_KEY = os.getenv('GOOGLE_GENAI_API_KEY')
    
    PROJECT_ID = os.getenv('FIREBASE_PROJECT_ID')
    
    CORS_ORIGINS = [
        'http://localhost:3000',
        'https://your-domain.com'
    ]
    
    MAX_REQUESTS_PER_MINUTE = 60
    
    DEFAULT_TIMEOUT = 30
    
    @classmethod
    def validate_required_env_vars(cls):
        """Validate that all required environment variables are set"""
        required_vars = [
            'AZURE_OPENAI_API_KEY',
        ]
        
        missing_vars = []
        for var in required_vars:
            if not getattr(cls, var):
                missing_vars.append(var)
        
        if missing_vars:
            raise ValueError(f"Missing required environment variables: {', '.join(missing_vars)}")
        
        return True
