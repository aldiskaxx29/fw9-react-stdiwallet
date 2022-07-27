import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { PrivateRoute } from './component/PrivateRoute';
import { AddNumber } from './pages/AddNumber';
import { ChangePassword } from './pages/ChangePassword';
import { ChangePin } from './pages/ChangePin';
import { ChangePinNew } from './pages/ChangePinNew';
import CreatePin from './pages/CreatePin';
import CreatePinSuccess from './pages/CreatePinSuccess';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordInsert from './pages/ForgotPasswordInsert';
import { History } from './pages/History';
import { Home } from './pages/Home';
import Landingpage from './pages/Landingpage';
import  Login  from './pages/Login';
import { ManagePhone } from './pages/ManagePhone';
import { PersonalInfo } from './pages/PersonalInfo';
import { Profile } from './pages/Profile';
import SignUp from './pages/SignUp';
import { StatusFailed } from './pages/StatusFailed';
import { StatusSuccess } from './pages/StatusSuccess';
import { TopUp } from './pages/TopUp';
import Transfer from './pages/Transfer';
import { TransferInput } from './pages/TransferInput';
import { TransferPinConfirm } from './pages/TransferPinConfirm';

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
        
        <Route path="home" element=
          {<PrivateRoute>
            <Home/>
          </PrivateRoute>
          }/>

        <Route path="history" element={
          <PrivateRoute>
            <History/>
          </PrivateRoute>
        }/>

        <Route path="transfer" element={
          <PrivateRoute>
            <Transfer/>
          </PrivateRoute>
        }/>

        <Route path="topUp" element={
          <PrivateRoute>
            <TopUp/>
          </PrivateRoute>
        }/>
        
        <Route path="profile" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }/>

        <Route path="transferInput" element={
          <PrivateRoute>
            <TransferInput/>
          </PrivateRoute>
        }/>

        <Route path="pinConfirm" element={
          <PrivateRoute>
            <TransferPinConfirm/>
          </PrivateRoute>
        }/>

        <Route path="statusSuccess" element={
          <PrivateRoute>
            <StatusSuccess/>
          </PrivateRoute>
        }/>

        <Route path="statusFailed" element={
          <PrivateRoute>
            <StatusFailed/>
          </PrivateRoute>
        }/>

        <Route path="personalInfo" element={
          <PrivateRoute>
            <PersonalInfo/>
          </PrivateRoute>
        }/>

        <Route path="manageNumber" element={
          <PrivateRoute>
            <ManagePhone/>
          </PrivateRoute>
        }/>

        <Route path="addNumber" element={
          <PrivateRoute>
            <AddNumber/>
          </PrivateRoute>
        }/>
        
        <Route path="changePassword" element={
          <PrivateRoute>
            <ChangePassword/>
          </PrivateRoute>
        }/>

        <Route path="changePin" element={
          <PrivateRoute>
            <ChangePin/>
          </PrivateRoute>
        }/>

        <Route path="typeNewPin" element={
          <PrivateRoute>
            <ChangePinNew/>
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;