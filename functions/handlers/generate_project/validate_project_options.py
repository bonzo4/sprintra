from utils.response import create_error_response


def validate_project_options(data):
    valid_project_types = ["hackathon", "mvp", "prototype", "full-project"]
    if data["project_type"] not in valid_project_types:
        return False, create_error_response(f"project_type must be one of: {', '.join(valid_project_types)}", 400)
    
    if not isinstance(data["timeline_hours"], (int, float)) or data["timeline_hours"] <= 0:
        return False, create_error_response("timeline_hours must be a positive number", 400)
    
    return True, None
