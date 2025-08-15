import json
from firebase_functions import https_fn
from handlers.generate_project.generate_project_with_ai import generate_project_with_ai
from utils.parse import parse_request_data
from utils.validate import validate_required_fields
from utils.response import create_error_response, create_success_response
from handlers.generate_project.load_prompt import load_prompt
from handlers.generate_project.validate_project_options import validate_project_options
from config import Config

@https_fn.on_request()
def generate_project(req: https_fn.Request) -> https_fn.Response:
    """Generate a project Kanban board using AI based on user input"""
    
    if req.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
        return https_fn.Response('', headers=headers)
    
    if req.method != 'POST':
        return create_error_response("Method not allowed", 405)
    
    try:
        data, error = parse_request_data(req)
        if error:
            return create_error_response(error, 400)
        
        required_fields = ["project_name", "project_description", "project_type"]
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
        
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        
        return https_fn.Response(
            json.dumps({
                "message": "Project generated successfully",
                "data": generated_project
            }),
            status=200,
            headers=headers
        )
        
    except Exception as e:
        return create_error_response(f"Internal server error: {str(e)}", 500)
