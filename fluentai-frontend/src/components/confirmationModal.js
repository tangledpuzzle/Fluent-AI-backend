import React from "react";
import styled from "styled-components";
import useWindowSize from "../Hooks/useWindowSize";

const ModalWrapper = styled.div`
  display: flex;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top:${(p) => (p.height < 450 ? '45%' : '50%')};
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  height: ${(p) => (p.height < 450 ? '230px' : '270px')};
  width: 461px;
  border-radius: 27px;
  box-sizing: border-box;
  background-color: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 27px;
  @media (max-width: 576px) {
    width: 70%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 70%;
  }
`;

const ModalHeading = styled.div`
  flex: 0 0 35%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ModalHeader = styled.div`
  font-family: "Manrope";
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: center;
  padding: 0 40px;
`;

const ModalFooter = styled.div`
  display: flex;
  margin-top: ${(p) => (p.height < 450 ? '30px' : '50px')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100px;
  height: 3.4rem;
  background: #a558c8;
  border-radius: 58px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130.5%;
  color: #fffeff;

  @media (max-width: 576px) {
    height: 2.4rem;
    width: 70px;
  }
`;

const ConfirmationModal = ({ setState, yesClick }) => {

  const windowSize = useWindowSize();
  return (
    <ModalWrapper height={windowSize.height}>
      <ModalHeading>
        <ModalHeader>Are you sure you want to logout?</ModalHeader>
      </ModalHeading>

      <ModalFooter height={windowSize.height}>
        <Button onClick={() => yesClick()}>Yes</Button>
        <Button onClick={() => setState((state) => !state)}>No</Button>
      </ModalFooter>
    </ModalWrapper>
  );
};

export default ConfirmationModal;