import { styled } from "styled-components";

export const SelectConfigurationScreenWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  border-radius: 27px;
  box-sizing: border-box;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 27px;
`;

export const SelectConfigurationHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 2rem;
`;

export const SelectConfigurationBody = styled.div`
  display: flex;
  border:2px solid black;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1 1 100%;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  @media (max-width: 576px) {
    padding: 0rem 0rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0rem 0rem;
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

export const SelectConfigurationFooter = styled.div`
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
