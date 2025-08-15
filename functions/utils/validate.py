from typing import Any, Dict

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
