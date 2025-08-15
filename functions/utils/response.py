import json
from firebase_functions import https_fn
from typing import Any

def create_error_response(message: str, status_code: int = 500) -> https_fn.Response:
    """
    Create a standardized error response
    """
    return https_fn.Response(
        json.dumps({"error": message}),
        status=status_code,
        headers={"Content-Type": "application/json"}
    )


def create_success_response(data: Any, message: str = "Success") -> https_fn.Response:
    """
    Create a standardized success response
    """
    response_data = {
        "message": message,
        "data": data
    }
    return https_fn.Response(
        json.dumps(response_data),
        status=200,
        headers={"Content-Type": "application/json"}
    )