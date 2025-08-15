import json
from pathlib import Path

def load_prompt() -> dict:
    """Load the prompt configuration from prompt.json"""
    try:
        prompt_path = Path(__file__).parent / "prompt.json"
        with open(prompt_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        raise Exception(f"Failed to load prompt.json: {str(e)}")