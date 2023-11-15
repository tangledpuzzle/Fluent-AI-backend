from app.utils.db.connect import db
from starlette.responses import JSONResponse
from config import MAX_FLUENCY_LEVEL, MIN_FLUENCY_LEVEL


def set_fluency(req,inp):
    try:
        user = req.state.user
        if inp.fluency_level < MIN_FLUENCY_LEVEL or inp.fluency_level > MAX_FLUENCY_LEVEL:
            return JSONResponse(status_code=403,
                                content={"success": False,
                                         "error": "Invalid fluency_level value, value must be between " + MIN_FLUENCY_LEVEL + " and  " + MAX_FLUENCY_LEVEL,
                                         })

        # language = db['languages'].find_one({"id": inp.lang_id})
        # print("language", language, inp.lang_id)
        # if not language:
        #     return JSONResponse(status_code=403,
        #                         content={"success": False,
        #                                  "error": "Invalid language id"
        #                                  })

        db["language_fluency"].update_one({"userId": user["id"], "language_id": inp.lang_id},
                                          {"$set": {"fluency_level": inp.fluency_level}}, upsert=True)

        return {
            "success": True
        }


    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,
                            content={"success": False, "error": "Internal server error", "error_description": str(e)})
