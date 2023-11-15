import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { getLSItem, setLSItem } from "../utilities/general";
import { useDispatch, useSelector } from "react-redux";
import { setFluencyLevels, setUserLanguage } from "../AppRedux/actions/user";
import CustomizedSlider from "./Common/Table/customSlider";
import useWindowSize from "../Hooks/useWindowSize";
import {
  CustomModalWrapper,
  CustomModalContent,
  CustomModalClose,
  DescriptionWrapper,
  CustomSpacer,
  DescriptionOuterWrapper,
  CloseBtn,
  ContineBtn,
  ContineBtnWrapper
} from "./navBarStyle";
import {
  Row1,
  Language,
  LanguageSection1,
  LanguageSection2,
  RadioInput,
  Row2,
  ModalSlider
} from "./configurationDropDown";

export default function MobileLanguageSelect({ onCloseModal }) {
  
  const [id, setId] = useState()
  const [fluency, setFluency] = useState(0)
  const dispatch = useDispatch();
  const windowSize = useWindowSize();

  const {
    setFluencyLevelsSuccessData
  } = useSelector(({ user }) => user);

  useEffect(() => {
    if(getLSItem('lang_id')){
      setId(getLSItem('lang_id'))
    }
  }, [getLSItem('lang_id')]);

  useEffect(() => {
    if(getLSItem('fluency_level')){
      setFluency(getLSItem('fluency_level'))
    }
  }, [getLSItem('fluency_level')]);


  useEffect(() => {
    if(id && fluency && (id !== getLSItem('lang_id') || fluency !== getLSItem('fluency_level'))){
      updateFluency()
      if(id !== getLSItem('lang_id')){
        updateLanguage()
      }
    }
  }, [id, fluency]);

  const updateFluency = () => {
    dispatch(
      setFluencyLevels({
        fluency_level: fluency,
        lang_id: id,
      })
    );
  };

  const updateLanguage = () => {
    dispatch(
      setUserLanguage({
        language: id
      })
    );
  };

  useEffect(() => {
    if (setFluencyLevelsSuccessData){
      setLSItem("lang_id", id);
      setLSItem("fluency_level",fluency);
    }
  }, [setFluencyLevelsSuccessData]);

  return (
    <CustomModalWrapper height={windowSize?.height}>
      <CustomModalContent height={windowSize?.height}>
        <CustomModalClose onClick={onCloseModal}>
          <CloseBtn>X</CloseBtn>
        </CustomModalClose>
        <div>
          <Row1>
            <Language>
              <LanguageSection1>
                <img src="/Development/language.png" alt="imag" />
                <span>Mandarin</span>
              </LanguageSection1>
              <LanguageSection2>
                <RadioInput type="radio"
                  checked={id == 1}
                  onClick={() => setId(1)}
                ></RadioInput>
              </LanguageSection2>
            </Language>
          </Row1>
          <Row1>
            <Language>
              <LanguageSection1>
                <img src="/Development/spanish.svg" alt="imag" />
                <span>Spanish</span>
              </LanguageSection1>
              <LanguageSection2>
                <RadioInput type="radio"
                  checked={id == 2}
                  onClick={() => setId(2)}
                ></RadioInput>
              </LanguageSection2>
            </Language>
          </Row1>
          <CustomSpacer />
          <Row2>
            <ModalSlider>
              <Box sx={{ width: 400 }}>
                <CustomizedSlider source={"NavBar"} setFluency={setFluency} val={fluency} />
              </Box>
            </ModalSlider>
          </Row2>
          <DescriptionOuterWrapper>
            <DescriptionWrapper>
              <ul>
                <li>Beg - Beginner</li>
                <li>Int - Intermediate</li>
                <li>Adv - Advanced</li>
                {/* <li>Flu - Fluent</li>
                <li>Nat - Native</li> */}
              </ul>
          </DescriptionWrapper>
        </DescriptionOuterWrapper>
        <ContineBtnWrapper>
          <ContineBtn onClick={onCloseModal}>Continue</ContineBtn>
        </ContineBtnWrapper>
        </div>
      </CustomModalContent>
    </CustomModalWrapper>
  );
}
