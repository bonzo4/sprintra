"""
Utility functions for Firebase Cloud Functions
"""
import json
from firebase_functions import https_fn
from typing import Any, Dict


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


def validate_required_fields(data: Dict, required_fields: list) -> tuple[bool, str]:
    """
    Validate that all required fields are present in the data
    Returns (is_valid, error_message)
    """
    missing_fields = []
    for field in required_fields:
        if field not in data or data[field] is None:
            missing_fields.append(field)
    
    if missing_fields:
        return False, f"Missing required fields: {', '.join(missing_fields)}"
    
    return True, ""


def parse_request_data(req: https_fn.Request) -> tuple[Dict | None, str]:
    """
    Parse JSON data from request
    Returns (data, error_message)
    """
    try:
        data = req.get_json()
        if data is None:
            return None, "No JSON data provided"
        return data, ""
    except Exception as e:
        return None, f"Invalid JSON data: {str(e)}"
