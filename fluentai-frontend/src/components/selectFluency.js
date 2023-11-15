import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  BackButton,
  BackButtonWrapper,
  Button,
  Language,
  LanguageSelected,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalSelector,
  ModalSlider,
  ModalSubText,
  ModalWrapper,
  DescriptionWrapper
} from "./selectFluencyStyle";
import { useNavigate } from "react-router-dom";
import CustomizedSlider from "./Common/Table/customSlider";
import { useDispatch, useSelector } from "react-redux";
import { setFluencyLevels, setUserLanguage } from "../AppRedux/actions/user";
import useWindowSize from "../Hooks/useWindowSize";
import { setLSItem } from "../utilities/general";

const marks = [
  {
    value: 5,
    label: "Beginner",
    payloadValue: 1,
  },
  {
    value: 29,
    label: "Intermediate",
    payloadValue: 2,
  },
  {
    value: 53,
    label: "Advanced",
    payloadValue: 3,
  },
  {
    value: 77,
    label: "Fluent",
    payloadValue: 4,
  },
  {
    value: 99,
    label: "Native",
    payloadValue: 5,
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function SelectFluencyModal({
  setCurrentPage,
  languageSelection,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [fluency,setFluency] = useState(3)
const windowSize = useWindowSize();
  const {
    setFluencyLevelsBegin,
    setFluencyLevelsSuccessData,
    setFluencyLevelsFailureData,
  } = useSelector(({ user }) => user);

  const handleFluencyPage = (fluencyLevel) => {    
    dispatch(
      setUserLanguage({
        language: languageSelection
      })
    );
    dispatch(
      setFluencyLevels({
        fluency_level: fluencyLevel,
        lang_id: languageSelection,
      })
    );
  };

  useEffect(() => {
    if (setFluencyLevelsSuccessData){
      setLSItem("lang_id", languageSelection);
      setLSItem("fluency_level",fluency);
      navigate("/chat");
    }
  }, [setFluencyLevelsSuccessData]);

  const onChangeFluency = (fl) => {
    setFluency(fl)
  }

  const getWidth = () => {
    if(windowSize.width >= 768){
      return 500
    } else if (windowSize.width < 768 && windowSize.width > 565) {
      return 320
    } else {
      return 200
    }
  }

  return (
    <ModalWrapper>
      <ModalHeading>
        {/* <BackButtonWrapper onClick={() => setCurrentPage("language")}>
          <BackButton>
            <img src="/Icons/backArrow.svg" alt="closeButton" />
          </BackButton>
        </BackButtonWrapper> */}

        <ModalHeader>Select your fluency</ModalHeader>
        <ModalSubText>
          You can change the fluency anytime from the top menu
        </ModalSubText>
      </ModalHeading>
      <ModalSelector>
        {languageSelection === 1 && (
          <Language>
            <img src="/Development/language.png" alt="imag"></img>
            <LanguageSelected>
              <div>Language Selected</div>
              <span>Mandarin</span>
            </LanguageSelected>
          </Language>
        )}
        {/* {languageSelection === 2 && (
          <>
          <Language>
            <img src="/Development/spanish.svg" alt="imag"></img>
            <LanguageSelected>
              <div>Language Selected</div>
              <span>Spanish</span>
            </LanguageSelected>
          </Language>
          </>
        )} */}
      </ModalSelector>
      <ModalSlider>
        <Box sx={{ width: getWidth() }}>
          <div style={{opacity: 1}}>
            <CustomizedSlider orientation={windowSize.width < 400 ? 'vertical' : 'horizontal'} source={'selectFluency'} setFluency={onChangeFluency}/>
          </div>
        </Box>
      </ModalSlider>
      <DescriptionWrapper>
          <ul>
            <li>Beg - Beginner</li>
            <li>Int - Intermediate</li>
            <li>Adv - Advanced</li>
            {/* <li>Flu - Fluent</li>
            <li>Nat - Native</li> */}
          </ul>
      </DescriptionWrapper>
      <ModalFooter>
        <Button onClick={() => handleFluencyPage(fluency)}>Continue</Button>
      </ModalFooter>
    </ModalWrapper>
  );
}
