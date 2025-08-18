from firebase_functions import https_fn
import os

# Define allowed origins - you can set this via environment variable or config
ALLOWED_ORIGINS = [
    'http://localhost:3000',  # Local development
    'https://your-site.com',  # Your production site
    'https://your-site.vercel.app',  # Your Vercel deployment
]

def is_origin_allowed(origin: str) -> bool:
    """
    Check if the origin is in the allowed list
    
    Args:
        origin: The origin header from the request
        
    Returns:
        True if origin is allowed, False otherwise
    """
    if not origin:
        return False
    return origin in ALLOWED_ORIGINS

def get_allowed_origin(req: https_fn.Request) -> str:
    """
    Get the allowed origin for the request
    
    Args:
        req: The incoming request
        
    Returns:
        The origin if allowed, or None if not allowed
    """
    origin = req.headers.get('Origin') or req.headers.get('origin')
    if is_origin_allowed(origin):
        return origin
    return None

def handle_cors_preflight(req: https_fn.Request) -> https_fn.Response:
    """
    Handle CORS preflight requests with origin validation
    
    Args:
        req: The incoming request
        
    Returns:
        Response with CORS headers if it's an OPTIONS request, None otherwise
    """
    if req.method == 'OPTIONS':
        allowed_origin = get_allowed_origin(req)
        if not allowed_origin:
            # Origin not allowed - return 403
            return https_fn.Response('Forbidden', status=403)
            
        headers = {
            'Access-Control-Allow-Origin': allowed_origin,
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': 'true',
        }
        return https_fn.Response('', headers=headers)
    return None

def get_cors_headers(req: https_fn.Request) -> dict:
    """
    Get CORS headers for responses with origin validation
    
    Args:
        req: The incoming request
        
    Returns:
        Dictionary of CORS headers
    """
    allowed_origin = get_allowed_origin(req)
    if not allowed_origin:
        # For non-preflight requests, we might want to be less strict
        # or you can return empty headers to block the response
        return {
            'Content-Type': 'application/json'
        }
    
    return {
        'Access-Control-Allow-Origin': allowed_origin,
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
    }
