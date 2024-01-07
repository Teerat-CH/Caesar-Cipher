import { useState } from 'react';
import axios from 'axios';

function RemoveSpace() {
    const [removeSpaceStatus, setRemoveSpaceStatus] = useState(true);
    const [error, setError] = useState('');

    const handleRemoveSpaceStatus = async (event) => {

        try {
            setRemoveSpaceStatus(!removeSpaceStatus)
            axios.post('http://localhost:5000/removeSpace', { removeSpaceStatus: removeSpaceStatus });
        } catch (error) {
            console.error('Error', error);
            setError('An error occurred while processing your request: Remove Space.')
        }

    }

    return (
        <div>
            <label>
                Remove Space?
                <input 
                    type = 'checkbox'
                    checked = { !removeSpaceStatus }
                    onChange = {handleRemoveSpaceStatus}
                />
            </label>
        </div>
    )
}

export default RemoveSpace