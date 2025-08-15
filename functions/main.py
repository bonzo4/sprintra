from firebase_functions.options import set_global_options
from firebase_admin import initialize_app


from handlers.generate_project.main import generate_project

set_global_options(max_instances=10)

initialize_app()
