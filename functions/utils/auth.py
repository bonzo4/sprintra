from firebase_admin import auth
from utils.response import create_error_response

def verify_id_token(id_token: str):
    """Verify Firebase ID token and return decoded token"""
    try:
        decoded_token = auth.verify_id_token(id_token)
        return decoded_token, None
    except Exception as e:
        return None, f"Invalid authentication token: {str(e)}"

def get_user_from_request(request_data):
    """Extract and verify user from request data"""
    id_token = request_data.get('idToken')
    if not id_token:
        return None, "Authentication token is required"
    
    decoded_token, error = verify_id_token(id_token)
    if error:
        return None, error
    
    return decoded_token, None
