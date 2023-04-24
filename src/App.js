import './App.css';
import FirmMaster from './FirmMaster/FirmMaster';
// import 'devextreme/dist/css/dx.light.css';
import { useEffect, useState } from 'react';
import { Button, Popup, RadioGroup } from 'devextreme-react';
import { Route, Router, Routes } from 'react-router-dom';
import TextInvoice from './components/FormMaster/TextInvoice';


// import 'devextreme/dist/css/icons'


const themes = {
  light: 'https://cdn3.devexpress.com/jslib/21.1.6/css/dx.light.css',
  dark: 'https://cdn3.devexpress.com/jslib/21.1.6/css/dx.dark.css',
  darkmoon: "%PUBLIC_URL%/styles/darkmoon.css",
  contrast: "https://cdn3.devexpress.com/jslib/21.1.6/css/dx.contrast.css",
  greenmist: "https://cdn3.devexpress.com/jslib/22.2.4/css/dx.greenmist.css"
};



function App() {
  const styleLink = document.querySelector('#style-link');
  styleLink.setAttribute('href', `${themes.contrast}`);

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<FirmMaster />} />
        <Route path='/TextInvoice' element={<TextInvoice />} />



      </Routes>



      {/* <Custom /> */}

    </div>
  );
}

export default App;
