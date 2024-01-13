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
        <h1>Caesar Cipher</h1>
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
            *Abbreviations, floating points, and possessive forms may cause the program to add space to sentences incorrectly.
          </p>
          <Decrypt />
        </div>
      </div>
      
    </div>
  );
}

export default App;