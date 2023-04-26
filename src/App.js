import './App.css';
import FirmMaster from './FirmMaster/FirmMaster';

import { Route, Router, Routes } from 'react-router-dom';
import TextInvoice from './components/FormMaster/TextInvoice';







function App() {
  const themes = {
    light: 'https://cdn3.devexpress.com/jslib/21.1.6/css/dx.light.css',
    dark: 'https://cdn3.devexpress.com/jslib/21.1.6/css/dx.dark.css',
    darkmoon: "%PUBLIC_URL%/styles/darkmoon.css",
    contrast: "https://cdn3.devexpress.com/jslib/21.1.6/css/dx.contrast.css",
    greenmist: "https://cdn3.devexpress.com/jslib/22.2.4/css/dx.greenmist.css"
  };
  const styleLink = document.querySelector('#style-link');
  styleLink.setAttribute('href', `${themes.contrast}`);

  return (
    <Routes>
      <Route exact path='/devextream-react' element={<FirmMaster />} />
      <Route exact path='/devextream-react/TextInvoice' element={<TextInvoice />} />
    </Routes>
  );
}

export default App;
