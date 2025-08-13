"""
AI Hello Function
"""
from firebase_functions import https_fn


@https_fn.on_request()
def hello_ai(req: https_fn.Request) -> https_fn.Response:
    """Simple AI hello function"""
    return https_fn.Response("Hello from AI functions!")
