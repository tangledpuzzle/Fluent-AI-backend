import axios from 'axios';

export const handleSpeak = async (text,langId) => {
        if (text) {
          try {
            const response = await axios.post(
              'https://texttospeech.googleapis.com/v1/text:synthesize',
              {
                input: { text },
                voice: { languageCode: langId == 1 ? 'zh-CN' : 'es-ES', ssmlGender: 'FEMALE' }, // Spanish (Spain), Female voice
                audioConfig: { audioEncoding: 'MP3' },
              },
              {
                params: { key: '' }, // Replace with your actual Google Cloud API key
              }
            );
            return response?.data
          } catch (error) {
            return error
          }
        }
      };

      


export const getLSItem = (type) =>{
  return localStorage.getItem(type);
}

export const setLSItem = (type,data) =>{
  return localStorage.setItem(type,data); // token
}


export const handleTranslate = async (text) => {
  if (text) {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {
          q: [text],
          target: "en"
        },
        {
          params: { key: '' },
        }
      );
      return response?.data?.data?.translations[0]
    } catch (error) {
      return error
    }
  }
};
