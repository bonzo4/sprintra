from firebase_functions import https_fn
from handlers.generate_project.generate_project_with_ai import generate_project_with_ai
from utils.parse import parse_request_data
from utils.validate import validate_required_fields
from utils.response import create_error_response, create_success_response
from utils.cors import handle_cors_preflight, get_cors_headers
from utils.auth import get_user_from_request
from handlers.generate_project.load_prompt import load_prompt
from handlers.generate_project.validate_project_options import validate_project_options
from config import Config

@https_fn.on_request()
def generate_project(req: https_fn.Request) -> https_fn.Response:
    """Generate a project Kanban board using AI based on user input"""
    
    # cors_response = handle_cors_preflight(req)
    # if cors_response:
    #     return cors_response
    
    if req.method != 'POST':
        return create_error_response("Method not allowed", 405)
    
    try:
        data, error = parse_request_data(req)
        if error:
            return create_error_response(error, 400)

        _, auth_error = get_user_from_request(data)
        if auth_error:
            return create_error_response(auth_error, 401)
        

        required_fields = ["name", "description", "type"]
        is_valid, validation_error = validate_required_fields(data, required_fields)
        if not is_valid:
            return create_error_response(validation_error, 400)
        
        is_valid, validation_error = validate_project_options(data)
        if not is_valid:
            return validation_error
        
        if not Config.AZURE_OPENAI_API_KEY:
            return create_error_response("AI service not configured", 500)
        
        prompt_config = load_prompt()
        
        generated_project = generate_project_with_ai(prompt_config, data)
        
        headers = get_cors_headers(req)
        
        return create_success_response(generated_project, "Project generated successfully")
        
    except Exception as e:
        return create_error_response(f"Internal server error: {str(e)}", 500)
