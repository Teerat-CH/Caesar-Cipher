import { useState } from 'react';
import axios from 'axios';

function Reverse() {
    const [checkStatus, setCheckStatus] = useState(true);
    const [error, setError] = useState('');

    const handleCheckStatus = async (event) => {
        setCheckStatus(!checkStatus)
        axios.post('http://localhost:5000/reverse', { checkStatus: checkStatus });
    }

    return (
        <div>
            <label>
                Reverse?
                <input 
                    type = 'checkbox'
                    checked = { checkStatus }
                    onChange = {handleCheckStatus}
                />
            </label>
            <p>Is "My Value" checked? {checkStatus.toString()}</p>
        </div>
    )
}

export default Reverse