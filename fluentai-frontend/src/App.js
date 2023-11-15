import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LanguageModal from "./components/chooseLanguageModal";
import SelectFluencyModal from "./components/selectFluency";
// import Referral from "./components/referrals";
import ReferralList from "./components/referralList";
import NavBar from "./components/navBar";
import Chat from "./Screens/chat/chat";
import Referral from "./Screens/referral/index";
import SignUpSection from "./Screens/signup/signup";
import LoginSection from "./Screens/login/Login";
import SelectConfiguration from "./Screens/selectConfiguration";
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
<>
<ToastContainer
        limit={1}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/" element={<LoginSection />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/signup" element={<SignUpSection />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/referrallist" element={<ReferralList />} />
          <Route path="/select" element={<SelectConfiguration />} />
        </Routes>
      </Router>

</>
    );
  }
}

export default App;
