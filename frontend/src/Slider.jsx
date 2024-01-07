import { useState } from 'react';
import axios from 'axios';

function Slider() {
    const [sliderValue, setSliderValue] = useState(2);
    const [error, setError] = useState('');

    const handleSliderStatus = async (event) => {
        try {
            const currentValue = event.target.value;
            setSliderValue(event.target.value);
            axios.post('http://localhost:5000/slider', { sliderValue: currentValue });
        } catch (error) {
            console.error('Error', error);
            setError('An error occurred while processing your request: Slider).');
        }
    }

    return (
        <div>
            <label>
                Slider
                <input 
                    type='range'
                    min={1}
                    max={26} 
                    step={1}
                    value={sliderValue}
                    onChange={handleSliderStatus}
                />
            </label>
            <p>{ sliderValue }</p>
        </div>
    );
}

export default Slider;