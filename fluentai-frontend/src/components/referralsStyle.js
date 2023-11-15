import { styled } from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  height: 950px;
  width: 600px;
  z-index: 9999;
  border-radius: 27px;
  box-sizing: border-box;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 50px;
  height: 100vh;
  box-sizing: border-box;
  @media (max-width: 630px) {
    width: auto;
  }
`;

export const ModalHeading = styled.div`
  flex: 0 0 16%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ModalNavBar = styled.div`
  flex: 0 0 6%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 4rem;
  box-sizing: border-box;
  align-items: flex-end;
  img {
    width: 18px;
    cursor: pointer;
  }
  @media (max-width: 450px) {
    padding-right: 1rem;
  }
`;

export const ModalHeader = styled.div`
  font-family: "Manrope";
  font-size: 36px;
  font-weight: 500;
  line-height: 47px;
  letter-spacing: -0.02em;
  text-align: left;
  padding: 0 60px;
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;
export const ModalSubText = styled.div`
  font-family: "Manrope";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  flex: 0 0 36%;
  padding: 0 60px;
  color: #886a94;
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0 0 48%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 3.6rem;
  @media (max-width: 450px) {
    padding: 0 1.4rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 0 0 30%;
  span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 130.5%;
    letter-spacing: 0.02em;
    color: #1f0929;
  }

  img {
    width: 18px;
    cursor: pointer;
  }
`;

export const ReferralMade = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
`;
export const ReferralUrl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  input {
    border: none;
    border-bottom: 1px solid #e0d3e5;
    outline: none;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 107.52%;
    letter-spacing: -0.04em;
    color: #1f0929;
    width: 100%;
    padding-right: 3rem;
  }

  img {
    cursor: pointer;
    position: absolute;
    right: 6px;
    bottom: 8px;
  }
`;

export const ReferralMadeRow1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 70%;
  :first-child {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130.5%;
    letter-spacing: -0.02em;
    color: #1f0929;
    text-align: left;
  }
  :nth-child(2) {
    width: 120px;
    height: 18px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 130.5%;
    color: #886a94;
    text-align: left;
  }
`;
export const ReferralMadeRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 30%;
`;
export const ReferralMadeRow2CircleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #a558c8;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  img {
    width: 36px;
    height: 36px;
  }
`;

export const MobileDrawerWrapper = styled.div`
  display: none;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 250px;
  width: 100%;
  z-index: 9999;
  box-sizing: border-box;
  background: #fffeff;
  height: 100vh;
  box-sizing: border-box;
  @media (max-width: 750px) {
    display: flex;
  }
`;

export const MobileNavBar = styled.div`
  flex: 0 0 6%;
  width: 100%;
  display: flex;
  margin-right: 15px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: flex-end;
  box-sizing: border-box;
  align-items: flex-end;
  img {
    width: 18px;
    cursor: pointer;
  }
`;

export const NavChild2 = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: row;
  height: 30px;
  border-bottom: 2px solid #e1dbe9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  img {
    width: 26px;
    height: 26px;
  }
`;

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 54%;
  width: 100%;
  box-sizing: border-box;
`;
