import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/registrationPages/resPage';
import Findprofessional from './pages/findProfessional';
import LoginPage from './pages/loginPages/logPage';
import UserProfile from './pages/useprofile/userprof'
import Admin from './pages/adminPage/adminPage'
import ResetPage from './pages/resetPage/reset'
import OTP from './pages/optpage/otpPage';
import Forgot from './pages/forgetPassword/forgotPage';



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/forget" element={<Forgot />} />
        <Route path="/reset-password/:token" element={<ResetPage />} exact/>
        <Route path="/otp/:email" element={<OTP />} exact/>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/professional" element={<LoginPage />} />
        <Route path="/workplans" element={<Findprofessional />} />
        <Route path="/admin" element={<Admin />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

