# Welcome to Cloud Functions for Firebase for Python!
# Simple modular structure with one hello function per domain
# Deploy with `firebase deploy`

from firebase_functions.options import set_global_options
from firebase_admin import initialize_app

# Import hello functions from each domain in handlers folder
from handlers.ai.main import hello_ai
from handlers.auth.main import hello_auth
from handlers.projects.main import hello_projects

# Set global options
set_global_options(max_instances=10)

# Initialize Firebase Admin SDK
initialize_app()

# Available functions:
# - hello_ai        (GET/POST /hello_ai)
# - hello_auth      (GET/POST /hello_auth)  
# - hello_projects  (GET/POST /hello_projects)