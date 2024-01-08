import { useState } from 'react';
import axios from 'axios';
import './InputField.css'

function Encrypt() {
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState('');
  const [error, setError] = useState('');
  

  const handleEncryptInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEncryptSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/encrypt', { text: inputText });
      setTransformedText(response.data.transformed_text);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request.');
      setTransformedText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleEncryptSubmit}>
        <div className='Input'>
          <p1 className='text'>Enter text to encrypt:</p1>
          <input className='InputField' type="text" value={inputText} onChange={handleEncryptInputChange} />
          <button className='button' type="submit">Encrypt</button>
        </div>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transformedText && (
        <div>
          <p><b>Result</b> {transformedText}</p>
        </div>
      )}
    </div>
  );
  
}

export default Encrypt;