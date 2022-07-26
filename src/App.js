import React from "react";
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { AddNumber } from "./pages/AddNumber";
import { ChangePassword } from "./pages/ChangePassword";
import { ChangePin } from "./pages/ChangePin";
import { ChangePinNew } from "./pages/ChangePinNew";
import CreatePin from "./pages/CreatePin";
import CreatePinSuccess from "./pages/CreatePinSuccess";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordInsert from "./pages/ForgotPasswordInsert";
import { History } from "./pages/History";
import { Home } from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import  Login  from "./pages/Login";
import { ManagePhone } from "./pages/ManagePhone";
import { PersonalInfo } from "./pages/PersonalInfo";
import { Profile } from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { StatusFailed } from "./pages/StatusFailed";
import { StatusSuccess } from "./pages/StatusSuccess";
import { TopUp } from "./pages/TopUp";
import Transfer from "./pages/Transfer";
import { TransferInput } from "./pages/TransferInput";
import { TransferPinConfirm } from "./pages/TransferPinConfirm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path="createPin" element={<CreatePin/>}/>
        <Route path="createPinSuccess" element={<CreatePinSuccess/>}/>
        <Route path="forgotPassword" element={<ForgotPassword/>}/>
        <Route path="forgotPasswordInsert" element={<ForgotPasswordInsert/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="history" element={<History/>}/>
        <Route path="transfer" element={<Transfer/>}/>
        <Route path="topUp" element={<TopUp/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="transferInput" element={<TransferInput/>}/>
        <Route path="pinConfirm" element={<TransferPinConfirm/>}/>
        <Route path="statusSuccess" element={<StatusSuccess/>}/>
        <Route path="statusFailed" element={<StatusFailed/>}/>
        <Route path="personalInfo" element={<PersonalInfo/>}/>
        <Route path="manageNumber" element={<ManagePhone/>}/>
        <Route path="addNumber" element={<AddNumber/>}/>
        <Route path="changePassword" element={<ChangePassword/>}/>
        <Route path="changePin" element={<ChangePin/>}/>
        <Route path="typeNewPin" element={<ChangePinNew/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;