import uuid
from datetime import datetime
from firebase_functions import https_fn
from firebase_admin import firestore
from utils.parse import parse_request_data
from utils.validate import validate_required_fields
from utils.response import create_error_response, create_success_response
from utils.cors import handle_cors_preflight, get_cors_headers
from handlers.save_new_project.transform import transform_ai_generated_to_project

@https_fn.on_request()
def save_new_project(req: https_fn.Request) -> https_fn.Response:
    """Save AI generated project and tasks to Firestore"""
    
    # Handle CORS preflight
    # cors_response = handle_cors_preflight(req)
    # if cors_response:
    #     return cors_response
    
    if req.method != 'POST':
        return create_error_response("Method not allowed", 405)
    
    try:
        data, error = parse_request_data(req)
        if error:
            return create_error_response(error, 400)
        
        required_fields = ["aiGeneratedProject", "userId"]
        is_valid, validation_error = validate_required_fields(data, required_fields)
        if not is_valid:
            return create_error_response(validation_error, 400)
        
        ai_project = data.get('aiGeneratedProject')
        user_id = data.get('userId')
        
        ai_required_fields = ["name", "description", "tasks", "criticalPaths", "totalEstimatedTime", "timeUnit"]
        is_valid, validation_error = validate_required_fields(ai_project, ai_required_fields)
        if not is_valid:
            return create_error_response(f"Invalid AI project structure: {validation_error}", 400)
        
        if not ai_project.get('tasks') or len(ai_project['tasks']) == 0:
            return create_error_response("AI project must contain at least one task", 400)
        
        
        project = transform_ai_generated_to_project(ai_project, user_id)
        
        try:
            db = firestore.client()
            
            project_ref = db.collection('projects').document()
            project_id = project_ref.id
            
            project['id'] = project_id
            
            tasks = project.pop('tasks', [])
            project_ref.set(project)

            tasks_collection = db.collection('tasks')
            batch = db.batch()
            
            for task in tasks:
                task_doc = task.copy()
                task_doc['projectId'] = project_id
                task_ref = tasks_collection.document()
                task_doc['id'] = task_ref.id
                batch.set(task_ref, task_doc)
            
            batch.commit()
            
        except Exception as firestore_error:
            return create_error_response(f"Failed to save to database: {str(firestore_error)}", 500)
        
        headers = get_cors_headers(req)
        
        response_data = {
            "projectId": project['id'],
            "project": project,
            "tasksCreated": len(tasks)
        }
        
        return create_success_response(response_data, "Project and tasks saved successfully")
        
    except Exception as e:
        return create_error_response(f"Internal server error: {str(e)}", 500)
    