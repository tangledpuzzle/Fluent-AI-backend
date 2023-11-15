import React, { useState } from "react";
import {
  Button,
  Language,
  LanguageSection1,
  LanguageSection2,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalSelector,
  ModalSubText,
  ModalWrapper,
  RadioInput,
} from "./chooseLanguageModalStyle";
import { toast } from "react-toastify";
import useWindowSize from "../Hooks/useWindowSize";

export default function ChooseLanguageModal({
  setCurrentPage,
  languages,
  handleSelection,
}) {
  const [id, setId] = useState(0);
  const windowSize = useWindowSize();

  return (
    <ModalWrapper>
      <ModalHeading>
        <ModalHeader>
          Which language do
          {windowSize?.width <= 768 ? " " : <br />}
          you want to use?
        </ModalHeader>
        <ModalSubText>
          You can change the language anytime from the top menu
        </ModalSubText>
      </ModalHeading>
      <ModalSelector>
        <Language>
          <LanguageSection1>
            <img src="/Development/language.png" alt="imag" />
            <span>{languages ? languages[0]?.name : ""}</span>
          </LanguageSection1>
          <LanguageSection2>
            <RadioInput
              type="radio"
              checked={id == 1}
              onClick={() => setId(1)}
            ></RadioInput>
          </LanguageSection2>
        </Language>
        {/* <Language>
          <LanguageSection1>
            <img src="/Development/spanish.svg" alt="imag" />
            <span>{languages ? languages[1]?.name : ""}</span>
          </LanguageSection1>
          <LanguageSection2>
            <RadioInput
              type="radio"
              checked={id == 2}
              onClick={() => setId(2)}
            ></RadioInput>
          </LanguageSection2>
        </Language> */}
      </ModalSelector>
      <ModalFooter>
        <Button
          onClick={() => {
            if (id != 0) handleSelection(id);
            else toast.error("Please make a selection");
          }}
        >
          Continue
        </Button>
      </ModalFooter>
    </ModalWrapper>
  );
}
