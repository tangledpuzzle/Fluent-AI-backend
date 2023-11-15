import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../AppRedux/actions/user";
import { toast } from "react-toastify";

import { LoginSectionWrapper, LoginFormWrapper, SignupBtn } from "../login/Login";
import { fontSize } from "@mui/system";
import GoogleAuthentication from "../../components/googleAuthenticator";


const SignUpSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const strongPasswordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  const { signupUserBegin, signupUserSuccessData, signupUserFailureData } =
    useSelector(({ user }) => user);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referralCode = queryParams.get("ref");

  const dispatch = useDispatch();

  const handleInput = (e, type) => {
    if (type === "email") setEmail(e.target.value);
    if (type === "password") setPassword(e.target.value);
    if (type === "confirm_password") setConfirmPassword(e.target.value);
  };

  const handleSignUp = () => {
    if (regex.test(email) === false) {
      toast.error("Please enter a valid email");
    } else if (!strongPasswordRegex.test(password)) {
      toast.error(
        "The password should contain at least 6 characters, including at least one letter, one number, and one special character."
      );
    } else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password should be the same.");
    } else {
      let payload = { email: email, password: password };
      if (referralCode) payload.referal_id = referralCode;
      dispatch(signupUser(payload));
    }
  };

  useEffect(() => {
    if (signupUserSuccessData) {
      navigate("/login");
      toast.success("New User Successfully Registered.");
    }
  }, [signupUserSuccessData]);

  return (
    <LoginSectionWrapper>
      {/* <img
        src="/Icons/bg.svg"
        style={{
          minHeight: "100%",
          width: "100%",
          height: "auto",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      /> */}
      <LoginFormWrapper>
        <img src="/Icons/logo.png" width={"50%"} alt="languru" />

        <span
          style={{
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: "130.5%",
            marginTop: "25%",
            alignSelf: "flex-start",
          }}
        >
          Sign up
        </span>
        <span
          style={{
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "130.5%",
            color: "#886A94",
            marginTop: "1.5%",
            alignSelf: "flex-start",
          }}
        >
          Setup your credentials to get ready
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
            marginTop: "10%",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", borderBottom: "1px solid #E0D3E5" }}>
            <input
              name={"Email"}
              style={{
                width: "100%",
                marginTop: "3%",
                paddingTop: "2%",
                paddingBottom: "2%",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                outline: "none",
                border: "0px",
              }}
              id={"Email"}
              type={"email"}
              placeholder={"Email"}
              onChange={(e) => {
                handleInput(e, "email");
              }}
            />
          </div>
          <div style={{ display: "flex", borderBottom: "1px solid #E0D3E5" }}>
            <input
              name={"Password"}
              style={{
                width: "100%",
                marginTop: "3%",
                paddingTop: "2%",
                paddingBottom: "2%",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                outline: "none",
                border: "0px",
              }}
              id={"Password"}
              type={showPassword ? "text" : "Password"}
              placeholder={"Password"}
              onChange={(e) => {
                handleInput(e, "password");
              }}
            />
             <img
                width={'28px'}
                style={{ alignSelf: "center", cursor: "pointer" }}
                src={showPassword ? "/Icons/show.png" : "/Icons/hide.png"}
                onClick={() => setShowPassword(!showPassword)}
              />
            {/* <img
              src="/Icons/showPassword.svg"
              style={{ alignSelf: "center", cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            /> */}
          </div>

          <div style={{ display: "flex", borderBottom: "1px solid #E0D3E5" }}>
            <input
              name={"Confirm Password"}
              style={{
                width: "100%",
                marginTop: "3%",
                paddingTop: "2%",
                paddingBottom: "2%",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                outline: "none",
                border: "0px",
              }}
              id={"Confirm Password"}
              type={showConfirmPassword ? "text" : "Password"}
              placeholder={"Confirm Password"}
              onChange={(e) => {
                handleInput(e, "confirm_password");
              }}
            />
            <img
                width={'28px'}
                style={{ alignSelf: "center", cursor: "pointer" }}
                src={showConfirmPassword ? "/Icons/show.png" : "/Icons/hide.png"}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            {/* <img
              src="/Icons/showPassword.svg"
              style={{ alignSelf: "center", cursor: "pointer" }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            /> */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25%",
          }}
        >
          <p style={{ color: "#886A94" }}>
            Already a user?
            <span
              style={{
                color: "#A558C8",
                cursor: "pointer",
                marginLeft: "5px",
                fontWeight: 700,
              }}
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
          <SignupBtn
            onClick={() => handleSignUp()}
          >
            Sign up
          </SignupBtn>
        </div>
       
      </LoginFormWrapper>
      <GoogleAuthentication buttonText="Signup using Google" />
    </LoginSectionWrapper>
  );
};
export default SignUpSection;
