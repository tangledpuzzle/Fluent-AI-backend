import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  width: 48rem;
  border-radius: 27px;
  box-sizing: border-box;
  /* box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 27px; */
`;

export const ModalHeading = styled.div`
  flex: 0 0 11%;
  width: 100%;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.6rem;
`;

export const ModalNavBar = styled.div`
  flex: 0 0 7%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-right: 4rem;
  box-sizing: border-box;
  align-items: flex-end;
  padding: 0 60px;
  img {
    width: 8px;
    cursor: pointer;
  }
`;

export const BackButton = styled.div`
  height: 36px;
  width: 36px;
  background: #e9def1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  font-family: "Manrope";
  font-size: 37px;
  font-weight: 600;
  line-height: 47px;
  letter-spacing: -0.02em;
  text-align: left;
  padding: 0 60px;
`;
export const ModalSubText = styled.div`
  font-family: "Manrope";
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  flex: 0 0 22%;
  padding: 0 60px;
  color: #886a94;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0 0 54%;
  width: 100%;
  gap: 28px;
  padding: 30px 60px;
  box-sizing: border-box;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 0 0 25%;
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
export const ShareWith = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex: 0 0 40%;
  justify-content: flex-end;
  span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130.5%;
    letter-spacing: 0em;
    color: #1f0929;
    font-weight: 600;
  }

  img {
    width: 20px;
    cursor: pointer;
  }
`;

export const ReferralMade = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;
export const ReferralUrl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
    padding-right: 1.2rem;
  }

  img {
    cursor: pointer;
    width: 20px;
  }
`;

export const ReferralMadeRow1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 60%;
  :first-child {
    height: 29px;
    font-family: "Manrope";
    font-weight: 500;
    font-size: 24px;
    line-height: 130.5%;
    letter-spacing: -0.02em;
    color: #1f0929;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 130.5%;
      color: #886a94;
      margin-left: 0.6rem;
    }
  }
`;
