import { styled } from "styled-components";

export const ReferralScreenWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  border-radius: 27px;
  box-sizing: border-box;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 27px;
  /* background-image: url("../public/background/bg.svg"); */
`;

export const ReferralHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 2rem;
`;

export const ReferralBody = styled.div`
  display: flex;
  margin-top: 10rem;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 50%;
  box-sizing: border-box;
  @media (max-width: 690px) {
    width: 95%;
  }
`;

export const LeftSection = styled.div`
  flex: 1 1 30%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightSection = styled.div`
  flex: 1 1 70%;
  width: 100%;
  height: 100%;
  padding-top: 20rem;
  box-sizing: border-box;
`;

export const ReferralFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12rem;
  background: radial-gradient(
    49.22% 120.42% at 50% -0.11%,
    #f2eaf7 0%,
    #f2ebf7 62.88%,
    #f6eff9 100%
  );
  position: fixed;
  bottom: 1px;
  padding: 30px 10px;
  box-sizing: border-box;
`;
