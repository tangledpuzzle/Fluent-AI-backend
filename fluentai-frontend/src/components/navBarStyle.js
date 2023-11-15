import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 100%;
  position: relative;
  width: 90vw;
  box-sizing: border-box;
  background: #fffeff;
  /* box-shadow: 0px 12px 36px #e5dfe8;
  border-radius: 64px; */
  @media (max-width: 576px) {
    // width: 94vw;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 94vw;
  }
`;

export const NavigationBar = styled.div`
  height: 60px;
  width: 100%;
  border-radius: 27px;
  box-sizing: border-box;
  background: #fffeff;
  box-shadow: 0px 12px 36px #e5dfe8;
  border-radius: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 750px) {
    height: auto;
  }
  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-radius: 48px;
    display: flex;
    gap: 1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-radius: 48px;
    display: flex;
    gap: 1rem;
  }
`;

export const NavLeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  @media (max-width: 768px) {
    flex: 1 1 auto;
  }
`;
export const NavRightSection = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (max-width: 768px) {
    flex: 1 1 auto;
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;
`;

export const NavChild1 = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  flex: 1 1 45%;
  height: 100%;
  border-right: 2px solid #e1dbe9;
  @media (max-width: 750px) {
    display: none;
    flex: 1 1 auto;
    border-right: none;
  }
`;
export const NavChild2 = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  flex: 1 1 10%;
  height: 100%;
  border-right: 2px solid #e1dbe9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 26px;
    height: 20px;
  }
  @media (max-width: 768px) {
    // display: none;
    // flex: 1 1 auto;
    // border-right: none;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;
export const NavChild3 = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  flex: 1 1 10%;
  height: 100%;
  border-right: 2px solid #e1dbe9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 26px;
    height: 20px;
  }
  @media (max-width: 768px) {
    // display: none;
    // flex: 1 1 auto;
    // border-right: none;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;
export const NavChild4 = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex: 1 1 28%;
  align-items: center;
  justify-content: space-between;
  padding-left: 0rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    @media (max-width: 768px) {
      gap: 0.4rem;
    }
  }
  @media (max-width: 768px) {
    flex: 1 1 auto;
    border-right: none;
    padding-left: 0;
    justify-content: flex-end;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const NavChild5 = styled.div`
  display: none;
  flex-direction: row;
  height: 100%;
  flex: 1 1 28%;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    @media (max-width: 768px) {
      gap: 0.4rem;
    }
  }
  @media (max-width: 750px) {
    flex: 1 1 auto;
    border-right: none;
    padding-left: 0;
    justify-content: flex-end;
    display: flex;
  }
`;

export const Language = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  padding:10px;

  span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 164.52%;
    letter-spacing: -0.01em;
    color: #1f0929;
  }
  @media (max-width: 768px) {
    // justify-content: flex-start;
  }
`;

export const LanguageFlagWrapper = styled.div`
  flex: 0 0 15%;
  margin-right:10px;
  img {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
`;
export const LanguageAction = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
`;
export const LanguageActionImageWrapper = styled.div`
  width: 42px;
  height: 20px;
  border-radius: 35%;
  border: 2px solid #846ca5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* flex: 0 0 40%; */
  img {
    width: 10px;
    height: 10px;
  }
`;

export const LanguageSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 13px;
  flex: 0 0 30%;
  div {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.01em;
    color: #1f0929;
    opacity: 0.6;
    line-height: 0.4;
  }
  span {
    font-family: "Manrope";
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.01em;
    color: #1f0929;
  }
  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
`;

export const AvartarImageWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: 5;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #a558c8, 0 0 0 4px rgba(91, 245, 255, 0.706808),
      0 0 0 6px rgba(255, 255, 255, 0);
  }
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    &::before {
      // Adjust the box-shadow styles accordingly
    }
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  position: relative;
  width:100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CustomModalWrapper = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
    overflow-y: ${(p) => (p.height < 450 ? 'scroll' : 'hidden')};;
`;

export const CustomModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
  z-index: 100;
  margin-bottom: ${(p) => (p.height < 450 ? '150px' : '5px')};
  overflow: visible;
`;

export const CustomModalClose = styled.div`
    color: #aaaaaa;
    font-size: 16px;
    font-weight: bold;
    text-align: end;
`;


export const DescriptionWrapper = styled.div`
  display: none;
  font-size: 12px;
  color: #886a94;
  @media (max-width: 565px) {
    display: block;
  }
`;

export const CustomSpacer = styled.div`
  width: 100%;
  height: 30px;
`;

export const DescriptionOuterWrapper = styled.div`
  width: 100%;
  margin-left: 23%;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
`;

export const ContineBtn = styled.button`
  background: #a558c8;
  padding: 10px;
  border-radius: 15px;
  border-width: 0px;
  color: #fff;
  cursor: pointer;
`;

export const ContineBtnWrapper = styled.div`
  text-align: end;
`;

export const UserEmail = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 1050px) {
    width: 150px;
  }
`;

export const LanguageSelectedNavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 13px;
  flex: 0 0 30%;
  div {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.01em;
    color: #1f0929;
    opacity: 0.6;
    line-height: 0.4;
  }
  span {
    font-family: "Manrope";
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.01em;
    color: #1f0929;
  }
  @media (max-width: 920px) {
    display:none;
  }
  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
`;










