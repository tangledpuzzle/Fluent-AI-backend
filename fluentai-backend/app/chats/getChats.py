from app.utils.db.connect import db
from starlette.responses import JSONResponse


def get_chats(req, req_data):
    try:
        user_id = req.state.user["id"]
        page_number = req_data.page
        page_size = req_data.limit
        pipeline = [
            {"$match": {"user_id": user_id}},
            # Count stage
            {"$facet": {
                "data": [
                    {"$skip": (page_number - 1) * page_size},
                    {"$limit": page_size},
                    {"$project": {"_id": 0}},
                ],
                "count": [{"$count": "total"}]
            }}
        ]

        # Execute the aggregate query
        result = list(db['chats'].aggregate(pipeline))
        print(result)
        return {
            "success":True,
            "data":result
        }
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
