import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  RESET_LOGIN_USER,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_BEGIN,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  RESET_SIGNUP_USER,
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  RESET_LOGOUT_USER,
  LOGOUT_USER_FAILURE,
  GET_USERFLUENCY_BEGIN,
  GET_USERFLUENCY_SUCCESS,
  GET_USERFLUENCY_FAILURE,
  RESET_GET_USERFLUENCY,
  GET_LANGUAGES_BEGIN,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE,
  RESET_GET_LANGUAGES,
  GET_FLUENCYLEVEL_BEGIN,
  GET_FLUENCYLEVEL_SUCCESS,
  GET_FLUENCYLEVEL_FAILURE,
  RESET_GET_FLUENCYLEVEL,
  SET_FLUENCYLEVEL_SUCCESS,
  RESET_SET_FLUENCYLEVEL,
  SET_FLUENCYLEVEL_FAILURE,
  SET_FLUENCYLEVEL_BEGIN,
  GET_REFFEREDUSERS_SUCCESS,
  GET_REFFEREDUSERS_BEGIN,
  GET_REFFEREDUSERS_FAILURE,
  RESET_GET_REFFEREDUSERS,
  GET_REFERRALLINK_BEGIN,
  GET_REFERRALLINK_FAILURE,
  GET_REFERRALLINK_SUCCESS,
  RESET_GET_REFERRALLINK,
  GOOGLE_LOGIN_USER_BEGIN,
  GOOGLE_LOGIN_USER_SUCCESS,
  GOOGLE_LOGIN_USER_FAILURE,
  RESET_GOOGLE_LOGIN_USER,
  GET_MESSAGE_LIST_BEGIN,
  GET_MESSAGE_LIST_SUCCESS,
  RESET_GET_MESSAGE_LIST,
  GET_MESSAGE_LIST_FAILURE,
  SEND_MESSAGE_BEGIN,
  SEND_MESSAGE_SUCCESS,
  RESET_SEND_MESSAGE,
  SEND_MESSAGE_FAILURE,
  SEND_ASSESSMENT_MESSAGE_BEGIN,
  SEND_ASSESSMENT_MESSAGE_SUCCESS,
  RESET_SEND_ASSESSMENT_MESSAGE,
  SEND_ASSESSMENT_MESSAGE_FAILURE,
  GET_MESSAGE_TRANSLATE_BEGIN,
  GET_TRASNLATED_SUCCESS_DATA,
  GET_TRASNLATED_FAILURE_DATA,
  GET_USER_LANGUAGE_BEGIN,
  GET_USER_LANGUAGE_SUCCESS,
  GET_USER_LANGUAGE_FAILURE,
  RESET_GET_USER_LANGUAGE,
  GET_USERLANGUAGE_BEGIN,
  GET_USERLANGUAGE_SUCCESS,
  GET_USERLANGUAGE_FAILURE,
  RESET_GET_USERLANGUAGE,
  GET_AUDIOLINK_BEGIN,
  GET_AUDIOLINK_SUCCESS,
  GET_AUDIOLINK_FAILURE,
  RESET_GET_AUDIOLINK
} from "../constants/user";

import http from "../../axios/httpUser";

export function sendAssessmentMessage(data) {
  return (dispatch) => {
    dispatch({
      type: SEND_ASSESSMENT_MESSAGE_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/chat/assessment`, data);

      doRequest.then(
        (res) => {
          dispatch({
            type: SEND_ASSESSMENT_MESSAGE_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_SEND_ASSESSMENT_MESSAGE,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: SEND_ASSESSMENT_MESSAGE_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_SEND_ASSESSMENT_MESSAGE,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function sendMessage(data) {
  return (dispatch) => {
    dispatch({
      type: SEND_MESSAGE_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/chat/response`, data);

      doRequest.then(
        (res) => {
          dispatch({
            type: SEND_MESSAGE_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_SEND_MESSAGE,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: SEND_MESSAGE_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_SEND_MESSAGE,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function getMessageList() {
  return (dispatch) => {
    dispatch({
      type: GET_MESSAGE_LIST_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/chat/list?page=1&limit=1000`);

      doRequest.then(
        (res) => {
          console.log(res.data);
          dispatch({
            type: GET_MESSAGE_LIST_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_MESSAGE_LIST,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_MESSAGE_LIST_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_MESSAGE_LIST,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function getReferralLinks() {
  return (dispatch) => {
    dispatch({
      type: GET_REFERRALLINK_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/referrals/link`);

      doRequest.then(
        (res) => {
          dispatch({
            type: GET_REFERRALLINK_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_REFERRALLINK,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_REFERRALLINK_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_REFERRALLINK,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}
export function getReferredUsers(currentPage) {
  return (dispatch) => {
    dispatch({
      type: GET_REFFEREDUSERS_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/referrals/users?page=${currentPage}&limit=10`);

      doRequest.then(
        (res) => {
          dispatch({
            type: GET_REFFEREDUSERS_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_REFFEREDUSERS,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_REFFEREDUSERS_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_REFFEREDUSERS,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function setFluencyLevels(data) {
  return (dispatch) => {
    dispatch({
      type: SET_FLUENCYLEVEL_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/languages/set-fluency`, data);

      doRequest.then(
        (res) => {
          dispatch({
            type: SET_FLUENCYLEVEL_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_SET_FLUENCYLEVEL,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: SET_FLUENCYLEVEL_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_SET_FLUENCYLEVEL,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}
// getFluency user

export function getFluencyLevels() {
  return (dispatch) => {
    dispatch({
      type: GET_FLUENCYLEVEL_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/languages/get-fluency-levels`);

      doRequest.then(
        (res) => {
          dispatch({
            type: GET_FLUENCYLEVEL_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_FLUENCYLEVEL,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_FLUENCYLEVEL_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_FLUENCYLEVEL,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function getLanguages() {
  return (dispatch) => {
    dispatch({
      type: GET_LANGUAGES_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/languages/get-languages`);

      doRequest.then(
        (res) => {
          dispatch({
            type: GET_LANGUAGES_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_LANGUAGES,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_LANGUAGES_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_LANGUAGES,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function googleLoginUser(data) {
  return (dispatch) => {
    dispatch({
      type: GOOGLE_LOGIN_USER_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/user/google-login`, data);

      doRequest.then(
        (res) => {
          dispatch({
            type: GOOGLE_LOGIN_USER_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GOOGLE_LOGIN_USER,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GOOGLE_LOGIN_USER_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GOOGLE_LOGIN_USER,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function loginUser(data) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      console.log("login request sent")
      let doRequest = http.post(`/user/login`, data);

      doRequest.then(
        (res) => {
          console.log("login request received")
          dispatch({
            type: LOGIN_USER_SUCCESS,
            data: res?.data,
          });
          dispatch({
            type: RESET_LOGIN_USER,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: LOGIN_USER_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_LOGIN_USER,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function signupUser(data) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_USER_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/user/signup`, data);

      doRequest.then(
        (res) => {
          dispatch({
            type: SIGNUP_USER_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_SIGNUP_USER,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: SIGNUP_USER_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_SIGNUP_USER,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function logoutUser(data) {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/user/logout`);

      doRequest.then(
        (res) => {
          dispatch({
            type: LOGOUT_USER_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_LOGOUT_USER,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: LOGOUT_USER_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_LOGOUT_USER,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function getUserFluency() {
  return (dispatch) => {
    dispatch({
      type: GET_USERFLUENCY_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/languages/get-user-fluency`);

      doRequest.then(
        (res) => {
          dispatch({
            type: GET_USERFLUENCY_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_USERFLUENCY,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_USERFLUENCY_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_USERFLUENCY,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function translateMessage(data) {
  return (dispatch) => {
    dispatch({
        type: GET_MESSAGE_TRANSLATE_BEGIN,
      });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/chat/translate`, data);

      doRequest.then(
        (res) => {
          resolve(res);
          dispatch({
            type: GET_TRASNLATED_SUCCESS_DATA,
            data: res.data,
          });
        },
        (err) => {
          dispatch({
            type: GET_TRASNLATED_FAILURE_DATA,
            data: err.response.data,
          });
          reject(err);
        }
      );
    });
    return promise;
  };
}

export function setUserLanguage(data) {
  return (dispatch) => {
    dispatch({
      type: GET_USER_LANGUAGE_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.post(`/languages/set-default`, data);

      doRequest.then(
        (res) => {
          dispatch({
            type: GET_USER_LANGUAGE_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_USER_LANGUAGE,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_USER_LANGUAGE_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_USER_LANGUAGE,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function getUserLanguage() {
  return (dispatch) => {
    dispatch({
      type: GET_USERLANGUAGE_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/languages/get-default`);

      doRequest.then(
        (res) => {
          console.log(res)
          dispatch({
            type: GET_USERLANGUAGE_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_USERLANGUAGE,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_USERLANGUAGE_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_USERLANGUAGE,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}

export function getAudioLink(path) {
  return (dispatch) => {
    dispatch({
      type: GET_AUDIOLINK_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get(`/chat/get-url?path=${path}`);

      doRequest.then(
        (res) => {
          dispatch({
            type: GET_AUDIOLINK_SUCCESS,
            data: res.data,
          });
          dispatch({
            type: RESET_GET_AUDIOLINK,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_AUDIOLINK_FAILURE,
            data: err.response.data,
          });
          dispatch({
            type: RESET_GET_AUDIOLINK,
          });

          reject(err);
        }
      );
    });

    return promise;
  };
}