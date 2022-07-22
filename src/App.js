import React from "react";
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Header from "./component/Headers";
import CreatePin from "./pages/CreatePin";
import CreatePinSuccess from "./pages/CreatePinSuccess";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordInsert from "./pages/ForgotPasswordInsert";
import Landingpage from "./pages/Landingpage";
import  Login  from "./pages/Login";
import SignUp from "./pages/SignUp";

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
        <Route path="home" element={<Header/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;