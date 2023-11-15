from deepgram import Deepgram
import json
from config import DEEPGRAM_API_KEY


def transcribe(audio_url, language):
    try:
        dg_client = Deepgram(DEEPGRAM_API_KEY)
        source = {'url': str(audio_url)}
        options = {"punctuate": True, "model": "general", "tier": "base", "language": language}
        # options = {"punctuate": True, "model": "base", "language": "zh-CN"}

        response = dg_client.transcription.sync_prerecorded(source, options)
        # print(response)EFD
        print('response', response)

        request_id = response["metadata"]["request_id"]
        duration = response["metadata"]["duration"]
        text = response["results"]["channels"][0]["alternatives"][0]["transcript"]

        # print("response", response)
        # print("response___________________",json.dumps(response, indent=4))
        return {
            "request_id": request_id,
            "duration": duration,
            "text": text
        }

    except Exception as e:
        print("error", e)
