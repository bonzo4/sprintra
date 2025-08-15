import json
from firebase_functions import https_fn
from typing import Dict


def parse_request_data(req: https_fn.Request) -> tuple[Dict | None, str]:
    try:
        data = req.get_json()
        if data is None:
            return None, "No JSON data provided"
        return data, ""
    except Exception as e:
        return None, f"Invalid JSON data: {str(e)}"