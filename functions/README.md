# Simple Firebase Functions Structure

A clean, modular structure with one hello function per domain organized in handlers.

## Structure

```
functions/
├── main.py              # Main entry point - imports all functions
├── requirements.txt     # Python dependencies
└── handlers/
    ├── ai/
    │   └── main.py     # AI-related functions
    ├── auth/
    │   └── main.py     # Authentication functions
    └── projects/
        └── main.py     # Project-related functions
```

## Available Functions

- `hello_ai` - Simple AI hello function
- `hello_auth` - Simple auth hello function
- `hello_projects` - Simple projects hello function

## Adding New Functions

1. Create a new folder under `handlers/` (e.g., `handlers/tasks/`)
2. Add a `main.py` file with your function
3. Import it in the root `main.py`
4. Deploy with `firebase deploy --only functions`

## Example Usage

Each function responds with a simple hello message:

- `https://your-project.cloudfunctions.net/hello_ai`
- `https://your-project.cloudfunctions.net/hello_auth`
- `https://your-project.cloudfunctions.net/hello_projects`
