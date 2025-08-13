"""
Auth Hello Function
"""
from firebase_functions import https_fn


@https_fn.on_request()
def hello_auth(req: https_fn.Request) -> https_fn.Response:
    """Simple auth hello function"""
    return https_fn.Response("Hello from Auth functions!")
