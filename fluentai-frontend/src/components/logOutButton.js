import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const LogOutButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 0.4rem;
  margin-left: 84%;
  width: 178px;
  height: 72px;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 18px;
  gap: 0.8rem;
  cursor: pointer;
  span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 164.52%;
    letter-spacing: -0.01em;
    color: #1f0929;
  }

  @media (max-width: 576px) {
    margin-left: 83%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-left: 84%;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    margin-left: 73%;
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    margin-left: 81%;
  }
  @media (min-width: 1301px) and (max-width: 1450px) {
    margin-left: 84%;
  }
  @media (min-width: 1450px) and (max-width: 1800px) {
    margin-left: 86%;
  }
`;

function LogOutButton({ handleLogout, setLogoutPopover }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setLogoutPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleLogout]);

  return (
    <LogOutButtonWrapper ref={buttonRef} onClick={() => handleLogout()}>
      <img src="/Icons/exit.svg" alt="Exit" />
      <span>Logout</span>
    </LogOutButtonWrapper>
  );
}

export default LogOutButton;
