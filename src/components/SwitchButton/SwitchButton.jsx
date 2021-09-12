import React from 'react';

import './SwitchButton.scss';

const SwitchButton = ({ isDarkMode, action }) => {
    
    const toggle = (e) => {
        action(e.target.checked);
    };
    
    return (
        <label className="switch-button">
            <input 
                type="checkbox" 
                className="switch-button-checkbox"
                checked={isDarkMode} 
                onChange={toggle}
            />
            <span className="switch-button-slider" />
        </label>
    );
};

export default SwitchButton;