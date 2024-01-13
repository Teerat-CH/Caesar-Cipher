import { useState } from 'react';
import axios from 'axios';
import './InputField.css';

function Decrypt() {
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState('');
  const [error, setError] = useState('');

  const handleDecryptInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleDecryptSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/decrypt', { text: inputText });
      setTransformedText(response.data.transformed_text);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('');
      setTransformedText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleDecryptSubmit}>
        <div className='Input'>
          <p1 className='text'>Enter text to <b>Decrypt</b>:</p1>
          <input className='InputField' type="text" value={inputText} onChange={handleDecryptInputChange} />
          <button className='button' type="submit">Decrypt</button>
        </div>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='output-box'>
        <p className='output'>{transformedText}</p>
      </div>
    </div>
  );
}

export default Decrypt;