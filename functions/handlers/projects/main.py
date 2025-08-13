"""
Projects Hello Function
"""
from firebase_functions import https_fn


@https_fn.on_request()
def hello_projects(req: https_fn.Request) -> https_fn.Response:
    """Simple projects hello function"""
    return https_fn.Response("Hello from Projects functions!")
