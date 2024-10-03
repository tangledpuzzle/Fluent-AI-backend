#_*_encoding:utf-8_*_
import time
import hashlib
import requests
import json
from config import SPEECHSUPER_APP_KEY, SPEECHSUPER_SECRET_KEY
import urllib.request

def pronunciation_assessment(audio_url, message):
    try:

        baseURL = "https://api.speechsuper.com/"

        timestamp = str(int(time.time()))

        coreType = "sent.eval.cn" # Change the coreType according to your needs.
        refText = message # Change the reference text according to your needs.
        slack = 1
        audioPath = "temp.mp3" # Change the audio path corresponding to the reference text.
        urllib.request.urlretrieve(audio_url, audioPath)

        # urllib.request.urlretrieve("https://fluentai-be.s3.amazonaws.com/audio/8bf1597c-ef07-4c16-b462-1496ec82f6cd/1/17b9df24-a332-4645-ae25-05a1a19cd01a.mp3?AWSAccessKeyId=AKIASLDSAIZDVWI6KTAJ&Signature=TqvLKEbksgjxAo8DYvBUqvRTI9o%3D&Expires=1690438803", audioPath)


        audioType = "mp3" # Change the audio type corresponding to the audio file.
        audioSampleRate = 16000
        userId = "guest"

        url = baseURL + coreType
        connectStr = (SPEECHSUPER_APP_KEY + timestamp + SPEECHSUPER_SECRET_KEY).encode("utf-8")
        connectSig = hashlib.sha1(connectStr).hexdigest()
        startStr = (SPEECHSUPER_APP_KEY + timestamp + userId + SPEECHSUPER_SECRET_KEY).encode("utf-8")
        startSig = hashlib.sha1(startStr).hexdigest()

        params={
            "connect":{
                "cmd":"connect",
                "param":{
                    "sdk":{
                        "version":16777472,
                        "source":9,
                        "protocol":2
                    },
                    "app":{
                        "applicationId":SPEECHSUPER_APP_KEY,
                        "sig":connectSig,
                        "timestamp":timestamp
                    }
                }
            },
            "start":{
                "cmd":"start",
                "param":{
                    "app":{
                        "userId":userId,
                        "applicationId":SPEECHSUPER_APP_KEY,
                        "timestamp":timestamp,
                        "sig":startSig
                    },
                    "audio":{
                        "audioType":audioType,
                        "channel":1,
                        "sampleBytes":2,
                        "sampleRate":audioSampleRate
                    },
                    "request":{
                        "coreType":coreType,
                        "refText":refText,
                        "tokenId":"tokenId",
                        "slack":slack
                    }

                }
            }
        }

        datas=json.dumps(params)
        data={'text':datas}
        headers={"Request-Index":"0"}
        files={"audio":open(audioPath,'rb')}
        res = requests.post(url, data=data, headers=headers, files=files)
        print(res.text.encode('utf-8', 'ignore').decode('utf-8'))

        return res.text.encode('utf-8', 'ignore').decode('utf-8')
    
    except Exception as e:
        print("error", e)
