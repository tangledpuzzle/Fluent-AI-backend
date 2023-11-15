import { styled } from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 572px;
  width: 600px;
  border-radius: 27px;
  box-sizing: border-box;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 27px;
  margin-top: 7rem;
  @media (max-width: 576px) {
    margin-top: 7rem;
    // height: 100vh;
    width: 70%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 7rem;
    // height: 100vh;
    width: 70%;
  }
`;

export const ModalHeading = styled.div`
  flex: 0 0 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 40px;
`;
export const ModalHeader = styled.div`
  font-family: "Manrope";
  font-size: 36px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.02em;
  text-align: left;
  padding: 0 50px;
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
  flex: 0 0 30%;
  padding: 0 50px;
  color: #886a94;
  display: flex;
  align-items: center;
`;

export const ModalSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 18%;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 40px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 0 0 18%;
  width: 100%;
  @media (max-width: 576px) {
    padding: 0 40px;
    box-sizing: border-box;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px;
    box-sizing: border-box;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 84%;
  height: 3.4rem;
  background: #a558c8;
  border-radius: 58px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130.5%;
  color: #fffeff;
  margin-bottom: 40px;
  @media (max-width: 576px) {
    width: 79vw;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 79vw;
  }
`;

export const Language = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: flex-start;
  box-sizing: border-box;
  img {
    width: 38px;
    height: 38px;
  }
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

export const LanguageSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 7px;
  padding-left: 12px;
  div {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.01em;
    color: #aaa1b3;
    // opacity: 0.6;
    line-height: 0.4;
    @media (max-width: 500px) {
      line-height: 1.1;
    }
  }
  span {
    font-family: "Manrope";
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.01em;
    color: #1f0929;
  }
`;

export const ModalSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 0 0 24%;
  padding-top: 1.6rem;
  margin-bottom: 50px;
  @media (max-width: 565px) {
    margin-bottom: -20px;
  }

`;

export const BackButton = styled.div`
  height: 30px;
  width: 30px;
  background: #f6f0ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 576px) {
    height: 40px;
    width: 40px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
  img {
    width: 8px;
    height: 8px;
    @media (max-width: 576px) {
      width: 10px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
      height: 10px;
    }
  }
`;

export const BackButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 50px;
  cursor: pointer;
  margin-bottom: 1.4rem;
  box-sizing: border-box;
`;

export const DescriptionWrapper = styled.div`
  display: none;
  font-size: 12px;
  color: #886a94;
  @media (max-width: 565px) {
    display: block;
  }
`;

