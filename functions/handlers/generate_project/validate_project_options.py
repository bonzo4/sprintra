import time
from utils.response import create_error_response


def validate_project_options(data):
    valid_project_types = ["hackathon", "mvp", "prototype", "full-project"]
    if data["type"] not in valid_project_types:
        return False, create_error_response(f"type must be one of: {', '.join(valid_project_types)}", 400)

    if "deadline" in data:
        if not isinstance(data["deadline"], (int, float)):
            return False, create_error_response("deadline must be a number (Unix timestamp)", 400)
        
        current_time = time.time()
        if data["deadline"] <= current_time:
            return False, create_error_response("deadline must be a date in the future", 400)

    return True, None
