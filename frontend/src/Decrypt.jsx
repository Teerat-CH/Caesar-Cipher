import { useState } from 'react';
import axios from 'axios';

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
      setError('An error occurred while processing your request.');
      setTransformedText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleDecryptSubmit}>
        <label>
          Enter text:
          <input type="text" value={inputText} onChange={handleDecryptInputChange} />
        </label>
        <button type="submit">Decrypt</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transformedText && (
        <div>
          <p>Transformed Text:</p>
          <p>{transformedText}</p>
        </div>
      )}
    </div>
  );
  
}

export default Decrypt;