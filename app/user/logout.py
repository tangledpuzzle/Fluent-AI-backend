from app.utils.redis import remove_data
from starlette.responses import JSONResponse

def logout(auth_header):
    try:
        bearer_token = None
        if auth_header:
            if auth_header.startswith("Bearer "):
                bearer_token = auth_header.split("Bearer ")[1]

        print(bearer_token)
        remove_data(bearer_token)
        return {
            "success":True
        }
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})

