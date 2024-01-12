import { useState } from 'react';
import axios from 'axios';
import './Slider.css'

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
                <div className="slider">
                    <div className='handleValue' style={{ marginLeft: `${((800-14)/25)*(sliderValue-1)}px`}}>{ parseInt(sliderValue) }</div>
                    <input
                        className='slideBar'
                        type='range'
                        min={1}
                        max={26} 
                        step={1}
                        value={sliderValue}
                        onChange={handleSliderStatus}
                    />
                    <div className='boundary'>
                        <p className="valueLeft">1</p>
                        <p className="valueRight">26</p>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default Slider;