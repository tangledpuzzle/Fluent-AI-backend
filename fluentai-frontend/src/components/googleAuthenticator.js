import React, { useEffect, useRef } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import styled from "styled-components";
import { getUserFluency, googleLoginUser } from "../AppRedux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { googleAuthKey } from "../config";
import { setLSItem } from "../utilities/general";
import { useNavigate } from "react-router-dom";

export const GoogleSignInWrapper = styled.div`
  margin: 15px 0px;
  position: relative;
  width: 100%;
  @media (max-width: 455px) {
    width: 76%;
  }
`;
export const GoogleHiddenBtn = styled.div`
  position: absolute;
  top: 0;
  left: 70px;
  top: 20px;
  z-index: 999;
  opacity: 0;
`;

export const CustomGoogleSignInBtn = styled.button`
  display: flex;
  width: calc(409px + 6%);
  justify-content: center;
  align-items: center;
  color: #1f0929;
  background-color: #ffffff;
  border-radius: 27px;
  padding: 27px;
  border: 0;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  @media (min-width: 455px) and (max-width: 576px) {
    width: 76%;
    padding: 20px;
    border-radius: 17px;
  }

  @media (max-width: 455px) {
    width: 100%;
    padding: 20px;
    border-radius: 17px;
  }
`;
const CustomGoogleSignIn = ({ buttonText }) => {
  const googleLoginRef = useRef(null);
  const navigate = useNavigate();
  const {
    googleLoginUserSuccessData,
    googleLoginUserFailureData,
    loginUserSuccessData,
    loginUserFailureData,
    getUserFluencySuccessData,
  } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (googleLoginUserSuccessData) {
      setLSItem("user_data", JSON.stringify(googleLoginUserSuccessData?.data));
      setLSItem("user_token", googleLoginUserSuccessData?.token);
      dispatch(getUserFluency());
    }
  }, [googleLoginUserSuccessData]);

  const handleGoogleLoginLoaded = (ref) => {
    // Assign the reference to googleLoginRef
    googleLoginRef.current = ref;
  };

  const handleGoogleLogin = (credential) => {
    // Handle the Google login response
    dispatch(googleLoginUser({ token: credential }));
  };

  useEffect(() => {
    if (getUserFluencySuccessData?.data) {
      if (getUserFluencySuccessData?.data?.length) {
        setLSItem("lang_id", getUserFluencySuccessData?.data[0]?.language_id);
        setLSItem(
          "fluency_level",
          getUserFluencySuccessData?.data[0]?.fluency_level
        );
        navigate("/chat");
      } else navigate("/select");
    }
  }, [getUserFluencySuccessData]);

  useEffect(() => {
    if (getUserFluencySuccessData?.data) {
      if (getUserFluencySuccessData?.data?.length) {
        setLSItem("lang_id", getUserFluencySuccessData?.data[0]?.language_id);
        setLSItem(
          "fluency_level",
          getUserFluencySuccessData?.data[0]?.fluency_level
        );
        navigate("/chat");
      } else navigate("/select");
    }
  }, [getUserFluencySuccessData]);

  return (
    <GoogleSignInWrapper>
      <CustomGoogleSignInBtn>
        <img src={"/Icons/google.png"} alt="Google" />
        {buttonText}
      </CustomGoogleSignInBtn>
      <GoogleHiddenBtn>
        <GoogleLogin
          id="custom-google-signin-btn"
          ref={googleLoginRef}
          clientId={googleAuthKey}
          onSuccess={(credentialResponse) => {
            handleGoogleLogin(credentialResponse?.credential);
          }}
          width={20}
          onFailure={(responseGoogle) => {
            toast.error("Error with Google login");
          }}
          cookiePolicy="single_host_origin"
          style={{ display: "none" }} // Hide the default Google Sign-In button
          onLoad={handleGoogleLoginLoaded}
        />
      </GoogleHiddenBtn>
    </GoogleSignInWrapper>
  );
};

export default CustomGoogleSignIn;
