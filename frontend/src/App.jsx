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

      <div className='header'>
        <a href="https://en.wikipedia.org/wiki/Caesar_cipher">
          <h1>Caesar Cipher</h1>
        </a>
      </div>

      <Slider/>

      <div className='function'>
        <div className='features'>
          <Reverse />
          <RemoveSpace />
          <Encrypt />
        </div>
        <div className='noteBoundary'>
          <p className='note'>
            *Abbreviations, floating points, and possessive forms may cause the program to add spaces incorrectly.
          </p>
          <Decrypt />
        </div>
      </div>
    </div>
  );
}

export default App;