import React, { useEffect, useState } from "react";
import ConfigurationDropDown from "./configurationDropDown";
import LogOutButton from "./logOutButton";
import {
  AvartarImageWrapper,
  Language,
  LanguageAction,
  LanguageActionImageWrapper,
  LanguageFlagWrapper,
  LanguageSelected,
  Logo,
  LogoText,
  NavBarWrapper,
  NavChild1,
  NavChild2,
  NavChild3,
  NavChild4,
  NavChild5,
  NavLeftSection,
  NavRightSection,
  NavigationBar,
  ModalWrapper,
  UserEmail,
  LanguageSelectedNavBar
} from "./navBarStyle";
import { ModalOuter } from "./ModalOuter";
import ConfirmationModal from "./confirmationModal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../AppRedux/actions/user";
import DrawerComponent from "./Common/Drawer/drawer";
import Referral from "./referrals";
import MobileDrawer from "./mobileDrawer";
import { useLocation } from "react-router-dom";
import { getLSItem } from "../utilities/general";
import { OutsideClickCloseContainer } from "./OutsideClickContainer";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';


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

export default function NavBar({handleClick, mode}) {
  const [showConfiguration, setShowConfiguration] = useState(false);
  const [showReferralDrawer, setShowReferralDrawer] = useState(false);
  const [logoutConfirmation, setLogoutConfirmation] = useState(false);
  const [showMobileDrawer, setMobileDrawer] = useState(false);
  const [logoutPopover, setLogoutPopover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logoutUserBegin, logoutUserSuccessData, logoutUserFailureData } =
    useSelector(({ user }) => user);

  
  const [modeId, setModeId] = useState(mode);
  
  const fluencyMap = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced",
    // 4: "Fluent",
    // 5: "Native"
  }
  const toggleConfiguration = () => {
    setShowConfiguration((prevShowConfiguration) => !prevShowConfiguration);
  };
  const toggleReferralDrawer = () => {
    setShowReferralDrawer(!showReferralDrawer);
  };

  const toggleMobileDrawer = () => {
    setMobileDrawer(!showMobileDrawer);
  };

  const handleLogout = () => {
    setLogoutConfirmation(true);
    setLogoutPopover(false);
  };
  useEffect(() => {
    if (logoutUserSuccessData) navigate("/login");
  }, [logoutUserSuccessData]);

  useEffect(() => {
    setModeId(mode);
  }, [mode])

  useEffect(() => {
    console.log("modeId", modeId);
  }, [modeId])

  const handledropdownnClick = (id) => {
    setModeId(id);
  }

  return (
    <NavBarWrapper>
      <NavigationBar>
        <NavLeftSection>
          <Logo onClick={() => navigate("/chat")}>
            {/* <img src="/Logo/LogoSplit/logoIcon1.svg" alt="logoIcon1.svg" />
            <LogoText>
              <img src="/Logo/LogoSplit/logoMainText2.svg" alt="LogoSubText" />
              <img src="/Logo/LogoSplit/logoSubText3.svg" alt="LogoText" />
            </LogoText> */}
             <img style={{width: '125px'}} src="/Icons/logo.png" alt="logoIcon1.svg" />
          </Logo>
        </NavLeftSection>
        <NavRightSection>
          {!pathname.includes("/select") && (
            <NavChild1>
              <Stack direction="row" fontSize={15} spacing={1} alignItems="center" onClick={() => setModeId(!modeId)}>
                Speech
                {mode?
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={handleClick(modeId)}/>:
                <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onClick={handleClick(modeId)}/>
                }
              </Stack>
              <Language>
                <LanguageFlagWrapper>
                  {getLSItem("lang_id") == 1 ? (
                    <img src="/Development/language.png" alt="imag" />
                  ) : (
                    <img src="/Development/spanish.svg" alt="imag" />
                  )}
                </LanguageFlagWrapper>

                <LanguageSelectedNavBar>
                  <span>
                    {getLSItem("lang_id") == 1 ? "Mandarin" : "Spanish"}
                  </span>
                  <div>{fluencyMap[getLSItem("fluency_level")]}</div>
                </LanguageSelectedNavBar>
                <LanguageAction>
                  <LanguageActionImageWrapper onClick={toggleConfiguration}>
                    <img src="/Icons/downArrow.svg" alt="downArrow" />
                  </LanguageActionImageWrapper>
                </LanguageAction>
              </Language>
            </NavChild1>
          )}
          <NavChild2 onClick={toggleReferralDrawer}>
            <img src="/Icons/contactsPlus.svg" alt="contacts plus" />
          </NavChild2>
          <NavChild3>
            <Link target={"_blank"} to="FormLink">
              <img src="/Icons/contactsPlusFigma.svg" alt="message" />
            </Link>
          </NavChild3>
          <NavChild4>
            <div onClick={() => setLogoutPopover(!logoutPopover)}>
              <UserEmail>{JSON.parse(getLSItem("user_data"))?.email}</UserEmail>
              <AvartarImageWrapper>
                <img src="/Icons/contactsAvatar.svg" alt="Image Description" />
              </AvartarImageWrapper>
            </div>
          </NavChild4>
          <NavChild5 onClick={toggleMobileDrawer} handleLogout={handleLogout}>
            <div onClick={() => setLogoutPopover(!logoutPopover)}>
              <AvartarImageWrapper>
                <img
                  height={20}
                  width={20}
                  src="/Icons/hamburger.png"
                  alt="HamBurger"
                />
              </AvartarImageWrapper>
            </div>
          </NavChild5>
        </NavRightSection>
      </NavigationBar>

      <ModalWrapper>
        <OutsideClickCloseContainer setState={setShowConfiguration}>
          {showConfiguration && <ConfigurationDropDown/>}
        </OutsideClickCloseContainer>

        {logoutPopover && (
          <LogOutButton
            handleLogout={handleLogout}
            setLogoutPopover={setLogoutPopover}
          />
        )}
      </ModalWrapper>

      <OutsideClickCloseContainer setState={setLogoutConfirmation}>
        {logoutConfirmation && (
          <ModalOuter
            state={logoutConfirmation}
            setState={setLogoutConfirmation}
          >
            <ConfirmationModal
              setState={setLogoutConfirmation}
              yesClick={() => dispatch(logoutUser())}
            />
          </ModalOuter>
        )}
      </OutsideClickCloseContainer>
      <DrawerComponent anchor={"right"} triggerDrawer={showReferralDrawer}>
        <div>
          <Referral onClose={() => setShowReferralDrawer(false)} />
        </div>
      </DrawerComponent>
      <DrawerComponent anchor={"right"} triggerDrawer={showMobileDrawer}>
        <div>
          <MobileDrawer onClose={() => setMobileDrawer(false)} toggleConfiguration={toggleConfiguration} handleLogout={handleLogout} handleClick={handledropdownnClick} modeId={modeId}/>
        </div>
      </DrawerComponent>
    </NavBarWrapper>
  );
}
