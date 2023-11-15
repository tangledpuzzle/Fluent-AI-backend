from app.utils.db.connect import db
from starlette.responses import JSONResponse
from .utils import get_user_referral_id


def get_user_list(req, params):
    try:
        user = req.state.user
        referral_id = get_user_referral_id(user['id'])
        total_count = 0
        if not referral_id:
            return JSONResponse(status_code=403,
                                content={"success": False, "error": "No referral id for user",
                                         })

        page_number = params.page
        page_size = params.limit

        # Aggregate query for pagination and count
        pipeline = [
            {"$match": {"referral_id": referral_id}},
            # Count stage
            {"$facet": {
                "data": [
                    {"$skip": (page_number - 1) * page_size},
                    {"$limit": page_size},
                    {"$project": {"_id": 0}},
                    {"$lookup": {
                        "from": "users",
                        "localField": "user_id",
                        "foreignField": "id",
                        "as": "user"
                    }},
                    {
                        "$addFields": {
                            "user_first_name": {"$arrayElemAt": ["$user.first_name", 0]},
                            "user_last_name": {"$arrayElemAt": ["$user.last_name", 0]},
                            "user_email": {"$arrayElemAt": ["$user.email", 0]}
                        }
                    },
                    {"$unset": "user"}

                ],
                "count": [{"$count": "total"}]
            }}
        ]

        # Execute the aggregate query
        result = list(db['user_referrals'].aggregate(pipeline))
        # print(result)
        data = result[0]["data"]
        # Extract the data and count from the result
        if len(result[0]["count"]):
            total_count = result[0]["count"][0]["total"]

        return {
            "success": True,
            "data": data,
            "total": total_count
        }


    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
