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
  LOGOUT_USER_FAILURE,
  RESET_LOGOUT_USER,

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

  SET_FLUENCYLEVEL_BEGIN,
  SET_FLUENCYLEVEL_SUCCESS,
  RESET_SET_FLUENCYLEVEL,
  SET_FLUENCYLEVEL_FAILURE,

  GET_REFFEREDUSERS_BEGIN,
  GET_REFFEREDUSERS_SUCCESS,
  GET_REFFEREDUSERS_FAILURE,
  RESET_GET_REFFEREDUSERS,

  GET_REFERRALLINK_BEGIN,
  GET_REFERRALLINK_SUCCESS,
  GET_REFERRALLINK_FAILURE,
  RESET_GET_REFERRALLINK,
  GOOGLE_LOGIN_USER_BEGIN,
  GOOGLE_LOGIN_USER_SUCCESS,
  GOOGLE_LOGIN_USER_FAILURE,
  RESET_GOOGLE_LOGIN_USER,
  SEND_MESSAGE_BEGIN,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  RESET_SEND_MESSAGE,
  SEND_ASSESSMENT_MESSAGE_BEGIN,
  SEND_ASSESSMENT_MESSAGE_SUCCESS,
  SEND_ASSESSMENT_MESSAGE_FAILURE,
  RESET_SEND_ASSESSMENT_MESSAGE,
  GET_MESSAGE_LIST_BEGIN,
  GET_MESSAGE_LIST_SUCCESS,
  GET_MESSAGE_LIST_FAILURE,
  RESET_GET_MESSAGE_LIST,
  
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

} from '../constants/user'

const initialState = {
  loginUserBegin: false,
  loginUserSuccessData: null,
  loginUserFailureData: null,

  signupUserBegin: false,
  signupUserSuccessData: null,
  signupUserFailureData: null,

  logoutUserBegin: false,
  logoutUserSuccessData: null,
  logoutUserFailureData: null,

  getUserFluencyBegin: false,
  getUserFluencySuccessData: null,
  getUserFluencyFailureData: null,

  getLanguagesBegin: false,
  getLanguagesSuccessData: null,
  getLanguagesFailureData: null,

  getFluencyLevelsBegin: false,
  getFluencyLevelsSuccessData: null,
  getFluencyLevelsFailureData: null,

  setFluencyLevelsBegin: false,
  setFluencyLevelsSuccessData: null,
  setFluencyLevelsFailureData: null,

  getRefferedUsersBegin: false,
  getRefferedUserSuccessData: null,
  getRefferedUserFailureData: null,

  getReferalLinkBegin: false,
  getReferalLinkSuccessData: null,
  getReferalLinkFailureData: null,

  googleLoginUserBegin: false,
  googleLoginUserSuccessData: null,
  googleLoginUserFailureData: null,

  sendMessageBegin: false,
  sendMessageSuccessData: null,
  sendMessageFailureData: null,

  sendAssessmentMessageBegin: false,
  sendAssessmentMessageSuccessData: null,
  sendAssessmentMessageFailureData: null,

  getMessageListBegin : false,
  getMessageListSuccessData: null,
  getMessageListFailureData: null,

  getMessageTranslateBegin : false,
  getTranslatedSuccessData: null,
  getTranslatedFailureData: null,

  getUserLanguageBegin: false,
  getUserLanguageSuccessData: null,
  getUserLanguageFailureData: null,

  getUserLanguagesBegin: false,
  getUserLanguagesSuccessData: null,
  getUserLanguagesFailureData: null,

  getAudiolinkBegin: false,
  getAudiolinkSuccessData: null,
  getAudiolinkFailureData: null,
  audioLinkData: null,
}

export const user = (state = initialState, action) => {
  const data = action.data;
  switch (action.type) {

                // Send Message
                case GET_MESSAGE_LIST_BEGIN:
                  return {
                    ...state,
                    getMessageListBegin: true,
                    getMessageListSuccessData: null,
                    getMessageListFailureData: null,
                  };
            
                case GET_MESSAGE_LIST_SUCCESS:
                  return {
                    ...state,
                    getMessageListBegin: false,
                    getMessageListSuccessData: data,
                    getMessageListFailureData: null,
                  };
                case GET_MESSAGE_LIST_FAILURE:
                  return {
                    ...state,
                    getMessageListBegin: false,
                    getMessageListSuccessData: null,
                    getMessageListFailureData: data,
                  };
                case RESET_GET_MESSAGE_LIST:
                  return {
                    ...state,
                    getMessageListBegin: false,
                    getMessageListSuccessData: null,
                    getMessageListFailureData: null,
                  };
    
                  
            // Send Message
            case SEND_MESSAGE_BEGIN:
              return {
                ...state,
                sendMessageBegin: true,
                sendMessageSuccessData: null,
                sendMessageFailureData: null,
              };
        
            case SEND_MESSAGE_SUCCESS:
              return {
                ...state,
                sendMessageBegin: false,
                sendMessageSuccessData: data,
                sendMessageFailureData: null,
              };
            case SEND_MESSAGE_FAILURE:
              return {
                ...state,
                sendMessageBegin: false,
                sendMessageSuccessData: null,
                sendMessageFailureData: data,
              };
            case RESET_SEND_MESSAGE:
              return {
                ...state,
                sendMessageBegin: false,
                sendMessageSuccessData: null,
                sendMessageFailureData: null,
              };

          // Send Assessment Message
            case SEND_ASSESSMENT_MESSAGE_BEGIN:
              return {
                ...state,
                sendAssessmentMessageBegin: true,
                sendAssessmentMessageSuccessData: null,
                sendAssessmentMessageFailureData: null,
              };
        
            case SEND_ASSESSMENT_MESSAGE_SUCCESS:
              return {
                ...state,
                sendAssessmentMessageBegin: false,
                sendAssessmentMessageSuccessData: data,
                sendAssessmentMessageFailureData: null,
              };
            case SEND_ASSESSMENT_MESSAGE_FAILURE:
              return {
                ...state,
                sendAssessmentMessageBegin: false,
                sendAssessmentMessageSuccessData: null,
                sendAssessmentMessageFailureData: data,
              };
            case RESET_SEND_ASSESSMENT_MESSAGE:
              return {
                ...state,
                sendAssessmentMessageBegin: false,
                sendAssessmentMessageSuccessData: null,
                sendAssessmentMessageFailureData: null,
              };

        // GoogleLogin
        case GOOGLE_LOGIN_USER_BEGIN:
          return {
            ...state,
            googleLoginUserBegin: true,
            googleLoginUserSuccessData: null,
            googleLoginUserFailureData: null,
          };
    
        case GOOGLE_LOGIN_USER_SUCCESS:
          return {
            ...state,
            googleLoginUserBegin: false,
            googleLoginUserSuccessData: data,
            googleLoginUserFailureData: null,
          };
        case GOOGLE_LOGIN_USER_FAILURE:
          return {
            ...state,
            googleLoginUserBegin: false,
            googleLoginUserSuccessData: null,
            googleLoginUserFailureData: data,
          };
        case RESET_GOOGLE_LOGIN_USER:
          return {
            ...state,
            googleLoginUserBegin: false,
            googleLoginUserSuccessData: null,
            googleLoginUserFailureData: null,
          };




    //GET reffered users
    case GET_REFERRALLINK_BEGIN:
      return {
        ...state,
        getReferalLinkBegin: true,
        getReferalLinkSuccessData: null,
        getReferalLinkFailureData: null,
      };

    case GET_REFERRALLINK_SUCCESS:
      return {
        ...state,
        getReferalLinkBegin: false,
        getReferalLinkSuccessData: data,
        getReferalLinkFailureData: null,
      };
    case GET_REFERRALLINK_FAILURE:
      return {
        ...state,
        getReferalLinkBegin: false,
        getReferalLinkSuccessData: null,
        getReferalLinkFailureData: data,
      };
    case RESET_GET_REFERRALLINK:
      return {
        ...state,
        getReferalLinkBegin: false,
        getReferalLinkSuccessData: null,
        getReferalLinkFailureData: null,
      };




    //GET reffered users
    case GET_REFFEREDUSERS_BEGIN:
      return {
        ...state,
        getRefferedUsersBegin: true,
        getRefferedUserSuccessData: null,
        getRefferedUserFailureData: null,
      };

    case GET_REFFEREDUSERS_SUCCESS:
      return {
        ...state,
        getRefferedUsersBegin: false,
        getRefferedUserSuccessData: data,
        getRefferedUserFailureData: null,
      };
    case GET_REFFEREDUSERS_FAILURE:
      return {
        ...state,
        getRefferedUsersBegin: false,
        getRefferedUserSuccessData: null,
        getRefferedUserFailureData: data,
      };
    case RESET_GET_REFFEREDUSERS:
      return {
        ...state,
        getRefferedUsersBegin: false,
        getRefferedUserSuccessData: null,
        getRefferedUserFailureData: null,
      };


    // Setting Fluency Level
    case SET_FLUENCYLEVEL_BEGIN:
      return {
        ...state,
        setFluencyLevelsBegin: true,
        setFluencyLevelsSuccessData: null,
        setFluencyLevelsFailureData: null,
      };

    case SET_FLUENCYLEVEL_SUCCESS:
      return {
        ...state,
        setFluencyLevelsBegin: false,
        setFluencyLevelsSuccessData: data,
        setFluencyLevelsFailureData: null,
      };
    case SET_FLUENCYLEVEL_FAILURE:
      return {
        ...state,
        setFluencyLevelsBegin: false,
        setFluencyLevelsSuccessData: null,
        setFluencyLevelsFailureData: data,
      };
    case RESET_SET_FLUENCYLEVEL:
      return {
        ...state,
        setFluencyLevelsBegin: false,
        setFluencyLevelsSuccessData: null,
        setFluencyLevelsFailureData: null,
      };




    // get fluency levels
    case GET_FLUENCYLEVEL_BEGIN:
      return {
        ...state,
        getFluencyLevelsBegin: true,
        getFluencyLevelsSuccessData: null,
        getFluencyLevelsFailureData: null,
      };

    case GET_FLUENCYLEVEL_SUCCESS:
      return {
        ...state,
        getFluencyLevelsBegin: false,
        getFluencyLevelsSuccessData: data,
        getFluencyLevelsFailureData: null,
      };
    case GET_FLUENCYLEVEL_FAILURE:
      return {
        ...state,
        getFluencyLevelsBegin: false,
        getFluencyLevelsSuccessData: null,
        getFluencyLevelsFailureData: data,
      };
    case RESET_GET_FLUENCYLEVEL:
      return {
        ...state,
        getFluencyLevelsBegin: false,
        getFluencyLevelsSuccessData: null,
        getFluencyLevelsFailureData: null,
      };


    // get languages
    case GET_LANGUAGES_BEGIN:
      return {
        ...state,
        getLanguagesBegin: true,
        getLanguagesSuccessData: null,
        getLanguagesFailureData: null,
      };

    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        getLanguagesBegin: false,
        getLanguagesSuccessData: data,
        getLanguagesFailureData: null,
      };
    case GET_LANGUAGES_FAILURE:
      return {
        ...state,
        getLanguagesBegin: false,
        getLanguagesSuccessData: null,
        getLanguagesFailureData: data,
      };
    case RESET_GET_LANGUAGES:
      return {
        ...state,
        getLanguagesBegin: false,
        getLanguagesSuccessData: null,
        getLanguagesFailureData: null,
      };

    // Login
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loginUserBegin: true,
        loginUserSuccessData: null,
        loginUserFailureData: null,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUserBegin: false,
        loginUserSuccessData: data,
        loginUserFailureData: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginUserBegin: false,
        loginUserSuccessData: null,
        loginUserFailureData: data,
      };
    case RESET_LOGIN_USER:
      return {
        ...state,
        loginUserBegin: false,
        loginUserSuccessData: null,
        loginUserFailureData: null,
      };

    case SIGNUP_USER_BEGIN:
      return {
        ...state,
        signupUserBegin: true,
        signupUserSuccessData: null,
        signupUserFailureData: null,
      };

    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        signupUserBegin: false,
        signupUserSuccessData: data,
        signupUserFailureData: null,
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        signupUserBegin: false,
        signupUserSuccessData: null,
        signupUserFailureData: data,
      };
    case RESET_SIGNUP_USER:
      return {
        ...state,
        signupUserBegin: false,
        signupUserSuccessData: null,
        signupUserFailureData: null,
      };

    // Logout
    case LOGOUT_USER_BEGIN:
      return {
        ...state,
        logoutUserBegin: true,
        logoutUserSuccessData: null,
        logoutUserFailureData: null,
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        logoutUserBegin: false,
        logoutUserSuccessData: data,
        logoutUserFailureData: null,
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        logoutUserBegin: false,
        logoutUserSuccessData: null,
        logoutUserFailureData: data,
      };
    case RESET_LOGOUT_USER:
      return {
        ...state,
        logoutUserBegin: false,
        logoutUserSuccessData: null,
        logoutUserFailureData: null,
      };


    //  Get User Fluency
    case GET_USERFLUENCY_BEGIN:
      return {
        ...state,
        getUserFluencyBegin: true,
        getUserFluencySuccessData: null,
        getUserFluencyFailureData: null,
      };

    case GET_USERFLUENCY_SUCCESS:
      return {
        ...state,
        getUserFluencyBegin: false,
        getUserFluencySuccessData: data,
        getUserFluencyFailureData: null,
      };
    case GET_USERFLUENCY_FAILURE:
      return {
        ...state,
        getUserFluencyBegin: false,
        getUserFluencySuccessData: null,
        getUserFluencyFailureData: data,
      };
    case RESET_GET_USERFLUENCY:
      return {
        ...state,
        getUserFluencyBegin: false,
        getUserFluencySuccessData: null,
        getUserFluencyFailureData: null,
      };

    //Get translated message begin

    case GET_MESSAGE_TRANSLATE_BEGIN:
      return {
        ...state,
        getMessageTranslateBegin: true,
        getTranslatedSuccessData: null,
        getTranslatedFailureData: null,
      };

    case GET_TRASNLATED_SUCCESS_DATA:
      return {
        ...state,
        getMessageTranslateBegin: true,
        getTranslatedSuccessData: data,
        getTranslatedFailureData: null,
      };
    case GET_TRASNLATED_FAILURE_DATA:
      return {
        ...state,
        getMessageTranslateBegin: true,
        getTranslatedSuccessData: null,
        getTranslatedFailureData: data,
      };

    // Get user language begin
    case GET_USER_LANGUAGE_BEGIN:
      return {
        ...state,
        getUserLanguageBegin: true,
        getUserLanguageSuccessData: null,
        getUserLanguageFailureData: null,
      };

    case GET_USER_LANGUAGE_SUCCESS:
      return {
        ...state,
        getUserLanguageBegin: false,
        getUserLanguageSuccessData: data,
        getUserLanguageFailureData: null,
      };
    case GET_USER_LANGUAGE_FAILURE:
      return {
        ...state,
        getUserLanguageBegin: false,
        getUserLanguageSuccessData: null,
        getUserLanguageFailureData: data,
      };
    case RESET_GET_USER_LANGUAGE:
      return {
        ...state,
        getUserLanguageBegin: false,
        getUserLanguageSuccessData: null,
        getUserLanguageFailureData: null,
      };
    
        //  Get User Language
    case GET_USERLANGUAGE_BEGIN:
      return {
        ...state,
        getUserLanguagesBegin: true,
        getUserLanguagesSuccessData: null,
        getUserLanguagesFailureData: null,
      };

    case GET_USERLANGUAGE_SUCCESS:
      return {
        ...state,
        getUserLanguagesBegin: false,
        getUserLanguagesSuccessData: data,
        getUserLanguagesFailureData: null,
      };
    case GET_USERLANGUAGE_FAILURE:
      return {
        ...state,
        getUserLanguagesBegin: false,
        getUserLanguagesSuccessData: null,
        getUserLanguagesFailureData: data,
      };
    case RESET_GET_USERLANGUAGE:
      return {
        ...state,
        getUserLanguagesBegin: false,
        getUserLanguagesSuccessData: null,
        getUserLanguagesFailureData: null,
      };

      //Get signed url

    case GET_AUDIOLINK_BEGIN:
      return {
        ...state,
        getAudiolinkBegin: true,
        getAudiolinkSuccessData: null,
        getAudiolinkFailureData: null
      };

    case GET_AUDIOLINK_SUCCESS:
      return {
        ...state,
        getAudiolinkBegin: false,
        getAudiolinkSuccessData: data,
        getAudiolinkFailureData: null
      };
    case GET_AUDIOLINK_FAILURE:
      return {
        ...state,
        getAudiolinkBegin: false,
        getAudiolinkSuccessData: null,
        getAudiolinkFailureData: data
      };
    case RESET_GET_AUDIOLINK:
      return {
        ...state,
        getAudiolinkBegin: false,
        getAudiolinkSuccessData: null,
        getAudiolinkFailureData: null
      };


    default:
      return state

  }

}