import React, { useState, useEffect } from "react";
import {
  DrawerBody,
  ModalFooter,
  MobileNavBar,
  MobileDrawerWrapper,
  NavChild2
} from "./referralsStyle";
import {
  Language,
  LanguageFlagWrapper,
  LanguageSelected

} from "./navBarStyle";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DrawerComponent from "./Common/Drawer/drawer";
import Referral from "./referrals";
import { getLSItem } from "../utilities/general";
import MobileLanguageSelect from "./mobileLanguageSelect";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const fluencyMap = {
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
  // 4: "Fluent",
  // 5: "Native"
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


export default function MobileDrawer({ onClose, handleLogout, toggleConfiguration, handleClick, modeId }) {
  const { pathname } = useLocation();
  const [showReferralDrawer, setShowReferralDrawer] = useState(false);
  const [showLanguageModal, setLanguageModal] = useState(false);
  const [mobileModeId, setMobileModeId] = useState(modeId);


  const toggleReferralDrawer = () => {
    setShowReferralDrawer(!showReferralDrawer);
  };

  const onLogout = () => {
    onClose()
    handleLogout()
  }

  const onLanguageSelect = () => {
    setLanguageModal(true)
  }

  const closeLanguageModal = () => {
    setLanguageModal(false)
    onClose()
  }

  useEffect(() => {
    console.log("mobileModeId", mobileModeId);
  }, [mobileModeId])


  return (
    <MobileDrawerWrapper>
      <MobileNavBar>
        <img src="/Icons/closeButton.svg" alt="closeButton" onClick={onClose} />
      </MobileNavBar>
      <DrawerBody>
          <NavChild2>
            <p>{JSON.parse(getLSItem("user_data"))?.email}</p>
          </NavChild2>
          {!pathname.includes("/select") &&
          <NavChild2>
            <Stack direction="row" fontSize={15} spacing={1} alignItems="center" onClick={() => setMobileModeId(!mobileModeId)}>
              Speech&nbsp;
              {mobileModeId?
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={handleClick(mobileModeId)}/>:
                <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onClick={handleClick(mobileModeId)}/>
              }
            </Stack>
          </NavChild2>}
          {!pathname.includes("/select") &&
          <NavChild2 onClick={onLanguageSelect}>              
              <Language>
                <LanguageFlagWrapper>
                  {getLSItem("lang_id") == 1 ? (
                    <img src="/Development/language.png" alt="imag" />
                  ) : (
                    <img src="/Development/spanish.svg" alt="imag" />
                  )}
                </LanguageFlagWrapper>

                <LanguageSelected>
                  <span>
                    {getLSItem("lang_id") == 1 ? "Mandarin" : "Spanish"}
                  </span>
                  <div>{fluencyMap[getLSItem("fluency_level")]}</div>
                </LanguageSelected>
              </Language>
          </NavChild2>}
          <NavChild2 onClick={toggleReferralDrawer}>
            <img src="/Icons/contactsPlus.svg" alt="contacts plus" />
          </NavChild2>
          <NavChild2>
            <Link target={"_blank"} to="FormLink">
              <img src="/Icons/contactsPlusFigma.svg" alt="message" />
            </Link>
          </NavChild2>
          <NavChild2 onClick={onLogout}>
            <img src="/Icons/exit.svg" alt="Exit" />
            <span>Logout</span>
          </NavChild2>
          
          <DrawerComponent anchor={"right"} triggerDrawer={showReferralDrawer}>
            <div>
              <Referral onClose={() => setShowReferralDrawer(false)} />
            </div>
          </DrawerComponent>
      </DrawerBody>
      <ModalFooter>
        
      </ModalFooter>
      {showLanguageModal && <MobileLanguageSelect onCloseModal={closeLanguageModal} />}
      
    </MobileDrawerWrapper>
  );
}
