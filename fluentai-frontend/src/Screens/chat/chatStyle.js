import { styled } from "styled-components";

export const MessageWrapper = styled.div`
display : flex;
width : 100%;
padding-top : 2%;
justify-content : start;
position: relative;
`;

export const UserMessageWrapper = styled.div`
  display : flex;
  flex-direction: column;
  width : 100%;
  padding-top : 2%;
  align-items : flex-end;
  position: relative;

  @media (max-width: 500px) {
    align-items : flex-end;
  }
`

export const MessageActionsBot = styled.div`
display : flex;
gap : 4px;
  img {
    width: 23px;
    cursor : pointer;
  }
  @media (max-width: 500px) {
    // display : none;
  }
`
export const UserMessage = styled.div`
word-break: break-all;
display: flex;
flex-direction: row;
margin-left : 5px;
align-items: flex-start;
padding: 16px 27px;
gap: 10px;
justify-content : space-between;
background: #A558C8;
box-shadow: 0px 16px 16px rgba(165, 88, 200, 0.16);
border-radius: 28px 0px 28px 28px;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 164.52%;
letter-spacing: -0.01em;
color: white;
max-width : 70%;
min-width : 20%;

@media (max-width: 500px) { 
  display: block;
  padding: 6px 10px;
  audio {
    width: 250px;
  }
}

`
export const BotMessage = styled.div`
word-break: break-all;
font-family: 'Manrope';
display: flex;
margin-right : 5px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 164.52%;
letter-spacing: -0.01em;
color: #1F0929;
flex-direction: row;
align-items: flex-start;
justify-content : space-between;
padding: 24px;
max-width : 70%;
min-width : 20%;
gap: 10px;
left: 302px;
top: 264px;
background: #FFFFFF;
box-shadow: 0px 12px 36px #EFE0F5;
border-radius: 27px 27px 27px 0px;
margin-left: 10px;
@media (max-width: 500px) {
  display: block;  
}

`
export const BotMessageInnerWrapper = styled.div`
  flex-direction: row;
  align-items: flex-start;
  justify-content : space-between;
`
export const ChatScreenWrapper = styled.div`
  display: flex;
  font-family: "Manrope";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  border-radius: 27px;
  box-sizing: border-box;
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 27px;
`;

export const ChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1rem;
  z-index: 5;
`;

export const ChatBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  // flex: 1 1 100%;
  height : 100%;
  box-sizing: border-box;
  padding: 1% 15%;
  width : 100%;
`;

export const LeftSection = styled.div`
  flex: 1 1 10%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 870px) {
   position: absolute;
   left: 0;
  }
  @media (max-width: 550px) {
    // width: 80%;
    img{
      max-width : 300px;
    }
   }
`;

export const RightSection = styled.div`
  flex: 1 1 90%;
  display : flex;
  flex-direction : column;
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  margin-bottom : 15%;
  padding-top: 12%;
  padding-bottom: 50px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display : none;
  }

  @media (max-width: 850px) {
    height: 80%;
   }
  `;

export const ChatFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 999;
  // height: 12rem;
  height: ${(p) => (p.height < 450 ? '25%' : '15%')};
  background: radial-gradient(
    49.22% 120.42% at 50% -0.11%,
    #f2eaf7 0%,
    #f2ebf7 62.88%,
    #f6eff9 100%
  );
  position: fixed;
  bottom: 1px;
  // padding: 30px 10px;
  padding: 15px 10px;
  box-sizing: border-box;
  @media (max-width: 550px) {
    height: 7rem;
    padding: 8px 17px;
   }
`;

export const MessagePanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  border: 2px solid #fff;
  gap: 0.8rem;
  height: 90%;
  box-sizing: border-box;
  border-radius: 32px;
  padding: ${(p) => (p.height < 450 ? '0.4rem' : ' 0.8rem')};
  background: radial-gradient(
    49.22% 120.42% at 50% -0.11%,
    #f2eaf7 0%,
    #f2ebf7 62.88%,
    #f6eff9 100%
  );
  @media (max-width: 550px) {
    width: 100%;
   }
`;

export const SectionOne = styled.div`
  flex: 1 1 6%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px;
  @media (max-width: 550px) {
    img: {
      width : 20px;
      height: 20px;
    }
   }
`;

export const SectionTwo = styled.div`
  flex: 1 1 94%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  padding: 0px 30px;
  box-sizing: border-box;
  @media (max-width: 550px) {
  padding: 0px 10px;
  }
`;

export const EnterMessage = styled.input`
  outline: none;
  border: none;
  box-sizing: border-box;
  flex: 1 1 90%;
  height: 5rem;
  height: 100%;
  ::placeholder {
    color: green;
  }
  @media (max-width: 550px) {
    height: 3rem;
    width: 100px;
  }
`;

export const ImageIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const ImageChatBackground = styled.img`
  max-width: 300px;
  position: absolute;
  left: 5%;
  bottom: 15%;
  // width: 487px;
  // height: 540px;
`;

export const CustomOverlay = styled.div`
  position: fixed; 
  display: block; 
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2; 
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 25%;
  z-index: 999;
`;

export const TranslatrionWrapper = styled.div`
  display : flex;
  width : 100%;
  padding-top : 2%;
  justify-content : start;
  position: absolute;
  bottom: 100%;
`;

export const BotMessageTranslation = styled.div`
  font-family: 'Manrope';
  display: flex;
  margin-right : 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 164.52%;
  letter-spacing: -0.01em;
  color: #1F0929;flex-direction: row;
  align-items: flex-start;
  justify-content : space-between;
  padding: 24px;
  max-width : 70%;
  min-width : 20%;
  gap: 10px;
  left: 302px;
  top: 264px;
  background: #EFE0F5;
  // box-shadow: 0px 12px 36px #EFE0F5;
  border-radius: 27px 27px 0px 27px;
`

export const MessageActionsBotTranslation = styled.div`
  img {
    width: 14px;
    cursor : pointer;
  }
`

export const MessageActionsBotAssessment = styled.div`
  img {
    width: 14px;
    cursor : pointer;
  }
`

export const UserMessageTranslation = styled.div`
display: flex;
flex-direction: row;
margin-left : 5px;
align-items: flex-start;
padding: 16px 27px;
gap: 54px;
/* Primary */

background: #EFE0F5;
border-radius: 28px 28px 28px 0px;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 164.52%;
letter-spacing: -0.01em;
color: #000000;
position: absolute;
bottom: 100%;
`

export const UserMessageAssessment = styled.div`
display: flex;
flex-direction: row;
margin-left : 5px;
align-items: flex-start;
padding: 16px 27px;
gap: 10px;
/* Primary */

background: #EFE0F5;
border-radius: 0px 28px 28px 28px;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 164.52%;
letter-spacing: -0.01em;
color: black;
position: absolute;
top: 100%;
z-index: 3;
width: 40%;
// height: 110px;

@media (max-width: 1500px) {
  width: 90%;
  // height: 100px;
}

@media (max-width: 1000px) {
  width: 90%;
  // height: 90px;
}
`

export const UserMessageTranslationBottom = styled.div`
display: flex;
flex-direction: row;
margin-left : 5px;
align-items: flex-start;
padding: 16px 27px;
gap: 54px;
/* Primary */

background: #EFE0F5;
border-radius: 28px 28px 28px 0px;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 164.52%;
letter-spacing: -0.01em;
color: #000000;
position: absolute;
top: 30%;
z-index: 3;
`

export const AssessmentScoreBoard = styled.div`
display: flex;
flex-flow: column;
width: 100%;
height: auto;
box-sizing: border-box;
text-align: center;
margin-left: 10px;
`

export const AssessmentScoreChart = styled.div`
display: flex;
flex-flow: row nowrap;
width: auto;
height: auto;
box-sizing: border-box;
`

export const AssessmentTable = styled.table``

export const AssessmentTableHead = styled.tr`
font-size: 20px;
color: blue;
@media (max-width: 1500px) {
  font-size: 15px;
}
@media (max-width: 280px) {
  font-size: 10px;
}
`

export const AssessmentTableBody = styled.tr`
font-size: 20px;
font-family: "KaiTi";
@media (max-width: 1500px) {
  font-size: 20px;
}
@media (max-width: 280px) {
  font-size: 15px;
}
`

export const ScoreChart = styled.div`
display: flex;
flex-flow: column nowrap;
width: 25%;
height: 110px;
box-sizing: border-box;
text-align: center;
font-size: 15px;

@media (max-width: 600px) {
  height: 80px;
}

@media (max-width: 400px) {
  font-size: 10px;
}
`

export const TotalScoreChart = styled.div`
display: flex;
flex-flow: column nowrap;
width: 25%;
height: 110px;
box-sizing: border-box;
text-align: center;
font-size: 25px;

@media (max-width: 1500px) {
  font-size: 20px;
}

@media (max-width: 600px) {
  height: 80px;
}

@media (max-width: 280px) {
  font-size: 10px;
}
`

export const LineBreakDiv = styled.div`
 justify-content: center;
 align-items: center;
 padding: 10px;
 border-bottom: 2px solid #bfbcbb;
 margin-bottom: 5px;
 position: relative;
 z-index: 3;

`

export const TimeStamp = styled.div`
 padding-top: 5px;
 justify-content: flex-start;
 align-items: flex-start;
 font-family: 'Manrope';
  font-style: normal;
  font-size: 12px;
  color: #1f0929;
  opacity: 0.5;
`
export const TimeStampWhite = styled.div`
 padding-top: 5px;
 justify-content: flex-start;
 align-items: flex-start;
 font-family: 'Manrope';
  font-style: normal;
  font-size: 12px;
  color: #ffffff;
  opacity: 0.5;
`

export const AudioHiddenContainer = styled.div`
  position: absolute;
  opacity: 0;
`
export const AutoPlayWrapper = styled.div`
  margin-left: 20px;
  text-align: center;
  cursor: pointer;
`

export const MuteText = styled.div`
 font-family: 'Manrope';
  font-style: bold;
  font-size: 20px;
  color: #1f0929;
  opacity: 0.7;
  margin-bottom: 5px;
  @media (max-width: 550px) {
    font-size: 14px;
   }
`

export const DesktopTimeStamp = styled.div`
display: block;
@media (max-width: 500px) {
  display: none;
 }
`

export const MobileTimeStamp = styled.div`
display: none;
@media (max-width: 500px) {
  display: block;
 }
`

export const BotMessageTyping = styled.div`
font-family: 'Manrope';
display: flex;
margin-right : 5px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 164.52%;
letter-spacing: -0.01em;
color: #1F0929;
flex-direction: row;
align-items: flex-start;
justify-content : space-between;
padding: 24px;
max-width : 70%;
min-width : 20%;
gap: 10px;
left: 302px;
top: 264px;
background: #FFFFFF;
box-shadow: 0px 12px 36px #EFE0F5;
border-radius: 27px 27px 27px 0px;
margin-left: 10px;
padding-bottom: 10px;
margin-bottom: 30px;
justify-content: center;
align-items: center;
max-width: 50px;
max-height: 30px;
overflow: hidden;

`




