import React from "react";
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Landingpage from "./pages/landingpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="landingpage" element={<Landingpage/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;