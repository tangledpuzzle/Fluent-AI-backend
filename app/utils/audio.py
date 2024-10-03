import wave

def convert_blob_to_wav(blob_data, output_path):
    with wave.open(output_path, 'wb') as wav_file:
        wav_file.setnchannels(1)  # Set number of channels (mono)
        wav_file.setsampwidth(2)  # Set sample width in bytes (16 bits)
        wav_file.setframerate(44100)  # Set sample rate (44100 Hz)
        wav_file.writeframes(blob_data)  # Write the binary blob data to the WAV file


