import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import ChooseLanguageModal from "../../components/chooseLanguageModal";
import SelectFluencyModal from "../../components/selectFluency";
import {
  SelectConfigurationBody,
  SelectConfigurationHeader,
  SelectConfigurationScreenWrapper,
} from "./indexStyle";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages, getUserLanguage } from "../../AppRedux/actions/user";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Typography } from '@mui/material';

function SelectConfiguration() {
const [languages,setLanguages] = useState(); 
const [languageSelection,setLanguageSelection] = useState() 
const dispatch = useDispatch();
const navigate = useNavigate();
  const {
    getLanguagesBegin,
    getLanguagesSuccessData,
    getLanguagesFailureData,
    getUserLanguagesSuccessData
  } = useSelector(({ user }) => user);

  const [currentPage, setCurrentPage] = useState("language");
    useEffect(()=>{
        dispatch(getLanguages())
        dispatch(getUserLanguage())  
    },[])

    // useEffect(()=>{
    //     if(getLanguagesSuccessData)
    //     {
    //       setLanguages(getLanguagesSuccessData?.data)
    //     }
    // },[getLanguagesSuccessData])

    useEffect(()=>{
      if(getLanguagesSuccessData)
      {
        setLanguages(getLanguagesSuccessData?.data);
        setLanguageSelection(1)
        setCurrentPage("fluency")
      }
    },[getLanguagesSuccessData])

    useEffect(()=>{
      if(getUserLanguagesSuccessData)
      {
        if(getUserLanguagesSuccessData?.data){
          setLanguages(getUserLanguagesSuccessData?.data)
          navigate('/chat')
        } 
      }
  },[getUserLanguagesSuccessData])

    // const handleSelection = (type) => {
    //   setLanguageSelection(type)  
    //   setCurrentPage("fluency")
    // }

  return (
    <SelectConfigurationScreenWrapper>
      <SelectConfigurationHeader>
        <NavBar />
      </SelectConfigurationHeader>
      <SelectConfigurationBody>
        {/* {currentPage === "language" ? (
          <ChooseLanguageModal setCurrentPage={setCurrentPage} languages={languages} handleSelection={handleSelection}/>
        ) : (
          <SelectFluencyModal setCurrentPage={setCurrentPage} languageSelection={languageSelection}/>
        )} */}
        <SelectFluencyModal setCurrentPage={setCurrentPage} languageSelection={languageSelection}/>
      </SelectConfigurationBody>
      {/* <SelectConfigurationFooter></SelectConfigurationFooter> */}
    </SelectConfigurationScreenWrapper>
  );

}

export default SelectConfiguration;
