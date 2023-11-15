import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  // height: 572px;
  width: 461px;
  border-radius: 27px;
  box-sizing: border-box;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 27px;
  padding: 40px 1px;
  @media (max-width: 576px) {
    margin-top: 12rem;
    // height: 100vh;
    width: 70%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 12rem;
    // height: 100vh;
  }
  
`;

export const ModalHeading = styled.div`
  flex: 0 0 35%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ModalHeader = styled.div`
  font-family: "Manrope";
  font-size: 36px;
  font-weight: 500;
  line-height: 47px;
  letter-spacing: -0.02em;
  text-align: left;
  padding: 0 40px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;
export const ModalSubText = styled.div`
  font-family: "Manrope";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  flex: 0 0 22%;
  padding: 0 40px;
  color: #886a94;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModalSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 35%;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  padding-top: 70px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // flex: 0 0 30%;
  width: 100%;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 82%;
  height: 3.4rem;
  background: #a558c8;
  border-radius: 58px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130.5%;
  color: #fffeff;
`;

export const Language = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: space-between;
  &:nth-child(1) {
    border-bottom: 1px solid #e0d3e5;
    padding: 0 0rem;
    padding-bottom: 26px;
  }
  &:nth-child(2) {
    margin-top: 2rem;
    padding-bottom: 26px;
  }
`;

export const LanguageSection1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;

  span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 164.52%;
    letter-spacing: -0.01em;
    color: #1f0929;
  }
`;
export const LanguageSection2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const RadioInput = styled.input`
  /* Hide the default radio button */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Create the custom radio button */
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  transition: border-color 0.2s;

  /* Define styles for the checked state */
  &:checked {
    border-color: #2ecc71;
    background-color: #2ecc71;
  }

  /* Define hover styles */
  &:hover {
    border-color: #3498db;
  }
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
`;
