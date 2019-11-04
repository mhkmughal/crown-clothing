import React from 'react';
import './custom-button.style.scss'

const CustomButton = ({ children }) => (
    <div>
        <button className='custom-button'>

            {children}

        </button>
    </div>
);
export default CustomButton;