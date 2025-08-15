import json
from openai import AzureOpenAI
from config import Config

def generate_project_with_ai(prompt_data: dict, user_input: dict) -> dict:
    try:
        client = AzureOpenAI(
            api_version=Config.AZURE_OPENAI_API_VERSION,
            azure_endpoint=Config.AZURE_OPENAI_ENDPOINT,
            api_key=Config.AZURE_OPENAI_API_KEY,
        )
        
        system_prompt = prompt_data["prompt"]
        input_format = json.dumps(prompt_data["input_format"], indent=2)
        output_format = json.dumps(prompt_data["output_format"], indent=2)
        example_input = json.dumps(prompt_data["example_input"], indent=2)
        example_output = json.dumps(prompt_data["example_output"], indent=2)
        user_input_json = json.dumps(user_input, indent=2)
        
        full_prompt = f"""
            {system_prompt}

            Expected Input Format:
            {input_format}

            Expected Output Format:
            {output_format}

            Example Input:
            {example_input}

            Example Output:
            {example_output}

            Now generate a project board for this input:
            {user_input_json}

            Please respond with ONLY the JSON output, no additional text or formatting.
            """
        
        response = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are Sprintra's AI Project Conductor. Generate only valid JSON responses without any additional text or formatting.",
                },
                {
                    "role": "user",
                    "content": full_prompt,
                }
            ],
            max_completion_tokens=16384,
            model=Config.AZURE_OPENAI_DEPLOYMENT
        )
        
        try:
            response_text = response.choices[0].message.content.strip()
    
            if response_text.startswith('```json'):
                response_text = response_text[7:]
            if response_text.endswith('```'):
                response_text = response_text[:-3]
            response_text = response_text.strip()
            
            generated_project = json.loads(response_text)
            return generated_project
        except json.JSONDecodeError as e:
            raise Exception(f"AI response is not valid JSON: {str(e)}")
            
    except Exception as e:
        raise Exception(f"AI generation failed: {str(e)}")