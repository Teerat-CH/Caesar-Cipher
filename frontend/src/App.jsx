import { useState } from 'react';
import axios from 'axios';
import './App.css'
import Slider from './Slider.jsx'
import Encrypt from './Encrypt.jsx'
import Decrypt from './Decrypt.jsx'
import Reverse from './Reverse.jsx'
import RemoveSpace from './RemoveSpace.jsx'


function App() {
  
  return (
    <div className='mainPage'>
      <Slider/>
      <Reverse />
      <RemoveSpace />
      <Encrypt />
      <Decrypt />
    </div>
  );
}

export default App;