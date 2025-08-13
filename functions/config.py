"""
Configuration settings for Firebase Cloud Functions
"""
import os


class Config:
    """Configuration class for Cloud Functions"""
    
    # API Keys
    GOOGLE_GENAI_API_KEY = os.getenv('GOOGLE_GENAI_API_KEY')
    
    # Firebase settings
    PROJECT_ID = os.getenv('FIREBASE_PROJECT_ID')
    
    # CORS settings
    CORS_ORIGINS = [
        'http://localhost:3000',
        'https://your-domain.com'  # Replace with your actual domain
    ]
    
    # Rate limiting
    MAX_REQUESTS_PER_MINUTE = 60
    
    # Response settings
    DEFAULT_TIMEOUT = 30
    
    @classmethod
    def validate_required_env_vars(cls):
        """Validate that all required environment variables are set"""
        required_vars = [
            'GOOGLE_GENAI_API_KEY',
        ]
        
        missing_vars = []
        for var in required_vars:
            if not getattr(cls, var):
                missing_vars.append(var)
        
        if missing_vars:
            raise ValueError(f"Missing required environment variables: {', '.join(missing_vars)}")
        
        return True
