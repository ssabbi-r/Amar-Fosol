import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import OtpVerification from "./components/OtpVerification";
import ResetPassword from "./components/ResetPassword"; // Import new component

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />  
      </Routes>
    </Router>
   
    
  );
}

export default App;
