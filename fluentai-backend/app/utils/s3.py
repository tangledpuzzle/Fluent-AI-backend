import boto3
import io
import asyncio
import starlette
from config import AWS_S3_ACCESS_KEY_ID, AWS_S3_SECRET_KEY, AWS_S3_BUCKET_NAME, AUDIO_FILE_SIGNED_URL_EXPIRY_TIME, \
    AWS_S3_REGION


async def upload_and_get_signed_url(file, file_name):
    try:
        print("file type",type(file))
        s3 = boto3.client('s3', aws_access_key_id=AWS_S3_ACCESS_KEY_ID, aws_secret_access_key=AWS_S3_SECRET_KEY,
                          region_name=AWS_S3_REGION)
        bucket_name = AWS_S3_BUCKET_NAME

        # # Check if the input is a file or a blob
        # if isinstance(file, bytes):
        #     print("blob")
        #     # Create a BytesIO object from the data blob
        #     file_obj = io.BytesIO(file)
        #     print("file___",file_obj)
        #     s3.upload_fileobj(file, bucket_name, file_name)
        # elif isinstance(file, io.IOBase):
        #     print("file")
        #     # Assuming `File` refers to a file-like object
        #     file_obj = file
        #     s3.put_object(Body=file_obj, Bucket=bucket_name, Key=file_name)
        # elif isinstance(file, starlette.datastructures.UploadFile):
        #     # Read the contents of the UploadFile object
        #     print("here")
        #     file_obj = file.file
        #     s3.put_object(Body=file_obj, Bucket=bucket_name, Key=file_name)
        # else:
        #     raise ValueError("Invalid file type. Expected either bytes or a file-like object.")

        file_obj = file.file
        s3.put_object(Body=file_obj, Bucket=bucket_name, Key=file_name,ContentType='audio/mpeg')

            # Await the file object if it's a coroutine
        # if asyncio.iscoroutine(file_obj):
        #     file_obj = await file_obj


        print("sssss")
        expiration_time_seconds = AUDIO_FILE_SIGNED_URL_EXPIRY_TIME  # Specify the expiration time of the signed URL (in seconds)
        signed_url = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': bucket_name, 'Key': file_name},
            ExpiresIn=expiration_time_seconds,
            HttpMethod='GET'
        )
        return signed_url
    except Exception as e:
        print("error",e)
        return False


def get_signed_url(file_path, expiry):
    try:
        s3 = boto3.client('s3', aws_access_key_id=AWS_S3_ACCESS_KEY_ID, aws_secret_access_key=AWS_S3_SECRET_KEY,
                          region_name=AWS_S3_REGION)
        signed_url = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': AWS_S3_BUCKET_NAME, 'Key': file_path},
            ExpiresIn=expiry,
            HttpMethod='GET'
        )
        return signed_url
    except Exception as e:
        print(e)
        return False

# print(get_signed_url('audio/Chinese-Mandarin-female-voiceover-sample.mp3',36000))
