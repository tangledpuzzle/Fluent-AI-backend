import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import {
  getUserFluency,
  googleLoginUser,
  loginUser,
  getUserLanguage
} from "../../AppRedux/actions/user";
import { getLSItem, setLSItem } from "../../utilities/general";
import { toast } from "react-toastify";
import { googleAuthKey } from "../../config";

export const LoginSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-left: 10%;
  padding-top: 5%;
  box-sizing: border-box;
  background-color: #fff;
  background: url(/Icons/rectangle.svg);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  // @media (max-width: 576px) {
  //   margin: 0;
  //   padding: 0;
  // }

  // @media (min-width: 577px) and (max-width: 768px) {
  //   margin: 0;
  //   padding: 0;
  // }
  @media (max-width: 450px) {
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;
const LoginContainer = styled.div`
  display: flex;
  border: 2px solid black;
  box-sizing: border-box;
  @media (max-width: 576px) {
    margin: 0;
    padding: 1rem 1.6rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin: 0;
    padding: 1rem 1.6rem;
  }
`;

const BackgroundImage = styled.img`
  min-height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  @media (min-width: 577px) and (max-width: 768px) {
    object-fit: cover;
  }
  @media (max-width: 576px) {
    object-fit: cover;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 3%;
  padding-right: 3%;
  width: 409px;
  border-radius: 27px;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;

  @media (max-width: 576px) {
    width: 70%;
  }
`;

const LogoImage = styled.img`
  width: 50%;
`;

const Title = styled.span`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 130.5%;
  margin-top: 25%;
  align-self: flex-start;
`;

const Subtitle = styled.span`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  line-height: 130.5%;
  color: #886a94;
  margin-top: 1.5%;
  align-self: flex-start;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-top: 10%;
  gap: 50px;
`;

const TextInput = styled.input`
  width: 100%;
  margin-top: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom: 1px solid #e0d3e5;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  outline: none;
  border: 0px;
`;

const ShowPasswordIcon = styled.img`
  align-self: center;
  cursor: pointer;
  margin-top: 15px;
`;

const SignUpComponent = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
  @media (max-width: 576px) {
    margin-top: 50px;
  }
`;

const NewToLanguruText = styled.p`
  color: #886a94;
`;

const SignUpLink = styled.span`
  color: #a558c8;
  cursor: pointer;
  margin-left: 5px;
`;

const ReferralMadeRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 30%;
`;

const ReferralMadeRow2CircleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #a558c8;
  border: none;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  img {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
const GoogleLoginComponent = styled.div`
  border: 2px solid black;
`;

export const GoogleSignInWrapper = styled.div`
  margin: 15px 0px;
  position: relative;
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

export const SignupBtn = styled.button`
  background-color: #A558C8;
  border: 0px;
  border-radius: 61px;
  padding: 18px 58px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  font-family: Manrope;
  font-size: 14px;
  @media (max-width: 576px) {
    padding: 10px 18px;
  }
`;

const LoginSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const ref = useRef();
  const [count, setCount] = React.useState("100px");
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const googleLoginRef = useRef(null);
  const dispatch = useDispatch();
  const {
    loginUserBegin,
    loginUserSuccessData,
    loginUserFailureData,
    getUserFluencyBegin,
    getUserFluencySuccessData,
    getUserFluencyFailureData,
    googleLoginUserBegin,
    googleLoginUserSuccessData,
    googleLoginUserFailureData,
    getUserLanguagesBegin,
    getUserLanguagesSuccessData,
    getUserLanguagesFailureData
  } = useSelector(({ user }) => user);

  const handleLogin = (e) => {
    e.preventDefault();

    // Email validation
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    // Password validation
    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    dispatch(loginUser({ email: email, password: password }));
  };

  const handleInput = (e, type) => {
    if (type === "email") setEmail(e.target.value);
    if (type === "password") setPassword(e.target.value);
  };

  useEffect(() => {
    if (googleLoginUserSuccessData) {
      setLSItem("user_data", JSON.stringify(googleLoginUserSuccessData?.data));
      setLSItem("user_token", googleLoginUserSuccessData?.token);
      dispatch(getUserLanguage());
    }
  }, [googleLoginUserSuccessData]);

  useEffect(() => {
    if (loginUserSuccessData?.data) {
      setLSItem("user_data", JSON.stringify(loginUserSuccessData?.data));
      setLSItem("user_token", loginUserSuccessData?.token);
      dispatch(getUserLanguage());
    }

    if (loginUserFailureData) {
    }
  }, [loginUserSuccessData, loginUserFailureData]);

  const handleGoogleLogin = (credential) => {
    // Handle the Google login response
    dispatch(googleLoginUser({ token: credential }));
  };

  useEffect(() => {
    if (getUserFluencySuccessData?.data) {
      if (getUserFluencySuccessData?.data?.length) {
        getUserFluencySuccessData?.data?.map(single => {
          if(single?.language_id?.toString() === getLSItem("lang_id")){
            setLSItem(
              "fluency_level",
              single?.fluency_level
            );
          }
        })
        navigate("/chat");
      } 
    }
  }, [getUserFluencySuccessData]);

  useEffect(() => {
    if(getUserLanguagesSuccessData){
      if(getUserLanguagesSuccessData?.data){
        setLSItem("lang_id", getUserLanguagesSuccessData?.data.language);
        dispatch(getUserFluency());
      } else{
        navigate("/select");
      }
      
      
    } 
  }, [getUserLanguagesSuccessData]);

  
  return (
    <>
      <LoginSectionWrapper>
        <LoginFormWrapper>
          {/* <LogoImage src="/Icons/logo1.svg" alt="languru" /> */}
          <LogoImage src="/Icons/logo.png" alt="languru" />
          <Title>Log in</Title>
          <Subtitle>Fill in your credentials to get started</Subtitle>
          <form onSubmit={(e) => handleLogin(e)}>
            <InputWrapper ref={ref}>
              <div
                style={{ display: "flex", borderBottom: "1px solid #E0D3E5" }}
              >
                <TextInput
                  name={"Email"}
                  id={"Email"}
                  type={"email"}
                  placeholder={"Email"}
                  onChange={(e) => handleInput(e, "email")}
                />
              </div>
              <div
                style={{ display: "flex", borderBottom: "1px solid #E0D3E5" }}
              >
                <TextInput
                  name={"Password"}
                  id={"Password"}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Password"}
                  onChange={(e) => handleInput(e, "password")}
                />
                <ShowPasswordIcon
                  width={'28px'}
                  src={showPassword ? "/Icons/show.png" : "/Icons/hide.png"}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </InputWrapper>

            <SignUpComponent>
              <NewToLanguruText>
                New to Languru?
                <SignUpLink onClick={() => navigate("/signup")}>
                  Sign up
                </SignUpLink>
              </NewToLanguruText>
              <ReferralMadeRow2>
                <input type="submit" hidden />
                <ReferralMadeRow2CircleWrapper
                  type="submit"
                  onClick={handleLogin}
                >
                  <img src="/Icons/rightArrowCircle.svg" alt="Circle right" />
                </ReferralMadeRow2CircleWrapper>
              </ReferralMadeRow2>
            </SignUpComponent>
          </form>
        </LoginFormWrapper>
        <GoogleSignInWrapper>
          <CustomGoogleSignInBtn>
            <img src={"/Icons/google.png"} alt="Google" />
            Login with google
          </CustomGoogleSignInBtn>
          <GoogleHiddenBtn>
            <GoogleLogin
              id="custom-google-signin-btn"
              ref={googleLoginRef}
              clientId={googleAuthKey}
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                handleGoogleLogin(credentialResponse?.credential);
              }}
              width={ref?.current?.offsetWidth}
              onFailure={(responseGoogle) => {
                toast.error("Error with Google login");
              }}
              cookiePolicy={"single_host_origin"}
              style={{ display: "none" }} // Hide the default Google Sign-In button
            />
          </GoogleHiddenBtn>
        </GoogleSignInWrapper>
      </LoginSectionWrapper>
    </>
  );
};

export default LoginSection;
