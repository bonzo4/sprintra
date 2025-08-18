import uuid
import random
from datetime import datetime
from utils.parse import parse_request_data
from utils.validate import validate_required_fields

def get_random_project_color():
    """Get a random project color from the available options"""
    colors = ["orange", "blue", "green", "purple"]
    return random.choice(colors)

def transform_ai_generated_to_project(ai_project: dict, user_id: str) -> dict:
    """
    Transform AIGeneratedProject to Project format
    """
    current_time = datetime.utcnow().isoformat()
    
    tasks = []
    for i, ai_task in enumerate(ai_project.get('tasks', [])):
        
        resources = []
        for resource in ai_task.get('resources', []):
            if isinstance(resource, str):
                resources.append({
                    "type": "doc",
                    "content": resource
                })
            elif isinstance(resource, dict):
                resources.append({
                    "type": resource.get("type", "doc"),
                    "content": resource.get("content", str(resource))
                })
        
        tags = [
            {
                "label": ai_task.get('priority', 'medium'),
                "color": {
                    'low': 'green',
                    'medium': 'blue', 
                    'high': 'orange',
                    'critical': 'red'
                }.get(ai_task.get('priority', 'medium'), 'blue')
            }
        ]
        
        task = {
            "title": ai_task.get('title', ''),
            "description": ai_task.get('description', ''),
            "timeEstimate": ai_task.get('timeEstimate', ai_task.get('estimated_time', 0)),
            "tags": tags,
            "priority": ai_task.get('priority', 'medium'),
            "status": "To Do",
            "resources": resources,
            "dependencies": ai_task.get('dependencies', [])
        }
        tasks.append(task)

    project = {
        "name": ai_project.get('name', ''),
        "description": ai_project.get('description', ''),
        "deadline": ai_project.get('deadline', ''),
        "timeUnit": ai_project.get('timeUnit', 'days'),
        "createdAt": current_time,
        "updatedAt": current_time,
        "progress": 0,
        "completedTasks": 0,
        "totalTasks": len(tasks),
        "userId": user_id,
        "tasks": tasks,
    }
    
    return project