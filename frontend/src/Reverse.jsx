import { useState } from 'react';
import axios from 'axios';

function Reverse() {
    const [reverseStatus, setReverseStatus] = useState(true);
    const [error, setError] = useState('');

    const handleReverseStatus = async (event) => {

        try {
            setReverseStatus(!reverseStatus)
            axios.post('/reverse', { reverseStatus: reverseStatus });
        } catch (error) {
            console.error('Error', error);
            setError('An error occurred while processing your request: Reverse.')
        }

    }

    return (
        <div>
            <label>
                <input 
                    type = 'checkbox'
                    checked = { !reverseStatus }
                    onChange = {handleReverseStatus}
                />
                Reverse?
            </label>
        </div>
    )
}

export default Reverse