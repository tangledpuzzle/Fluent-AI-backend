import requests
import json
from config import OPENAI_API_KEY,OPENAI_ORG_ID


def translate_text(text, language):
    try:

        endpoint = "https://api.openai.com/v1/chat/completions"

        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            # {"role": "user", "content": f"Translate the following {language} text to English: {text}output should be json schema is {{'input_text':'','translated_text':'','input_language':'','output_language':''}}"}
            {"role": "user", "content": f"""\" {text} \" translate this to english 
            instruction : return same text if its in english, don't add any other messages
            """ }



        ]

        # print(messages)
        payload = {
            "model": "gpt-3.5-turbo",
            "messages": messages
        }

        headers = {
            'OpenAI-Organization': OPENAI_ORG_ID,
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + OPENAI_API_KEY
        }
        response = requests.post(endpoint, json=payload, headers=headers)
        response_data = response.json()
        print(response_data)
        if response_data and "choices" in response_data:
            translated_text = response_data['choices'][0]['message']['content']
            # translated_text = json.loads(translated_text)
            # print(translated_text)

            translation = {
                "success": True,
                "translated_text": translated_text,
                "input_text": text,
                "language": language
            }
            return translation
        else:
            return {
                "success": False,
                "error": "Unable to translate the text",
                "error_description":response_data["error"]["message"]
            }
    except Exception as e:
        print("error", e)
        return {
            "success": False,
            "error": str(e)
        }

# # Example usage
# original_text = "Hola"  # Spanish text to translate
# translated_text = translate_text(original_text, "Spanish")
# print(translated_text)
