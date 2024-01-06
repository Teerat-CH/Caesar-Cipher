import { useState } from 'react';
import axios from 'axios';
import Encrypt from './Encrypt.jsx'
import Decrypt from './Decrypt.jsx'
import Reverse from './Reverse.jsx'


function App() {
  
  return (
    <div>
      <Reverse />
      <Encrypt />
      <Decrypt />
    </div>
  );
}

export default App;