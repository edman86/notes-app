import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useClickOutside } from '../../../customHooks/useClickOuside';

import './ControlsPopup.scss';

const ControlsPopup = ({
    isControlsPopupOpen,
    popupType,
    setIsControlsPopupOpen,
    controlsPopupPosition,
    editTextarea
}) => {

    const [link, setLink] = useState('');
    const popupContent = useSelector(state => state.controlsPopup[popupType]);
    const domNodeRef = useClickOutside(setIsControlsPopupOpen);
    
    let popupLabel;
    
    if (popupType === 'createLink') {
        popupLabel = 'Add link'
    } else if (popupType === 'addImage') {
        popupLabel = 'Add image link'
    }

    // Need to set stopPropagation, in order case,
    // if user try to select input field, the popup will be closed,
    // because click event of "openCloseControlsPopup" function is bubbling
    // and spreads on input field too.  
    const handleInputClick = (e) => {
        e.stopPropagation();
    };

    const handleSubmitClick = () => {
        editTextarea(popupType, link);
        setLink('');
    };

    const handleClick = (link) => {
        editTextarea(popupType, link);
    };

    return (
        <div
            className={`popup ${isControlsPopupOpen && 'show-popup'}`}
            style={{ left: controlsPopupPosition + 'px' }}
            ref={domNodeRef}
            onClick={() => setIsControlsPopupOpen(false)}
        >
            <input
                className="link-input"
                style={{ display: popupContent.inputField }}
                value={link}
                onChange={(e) => setLink(e.target.value)}
                onClick={handleInputClick}
            />

            {popupContent.content.map(item => {
                return (
                    <button
                        key={item.id}
                        className="btn popup-btn"
                        onClick={() => handleClick(item.value)}
                    >
                        {item.name}
                    </button>
                );
            })}

            <button
                className="btn popup-btn"
                style={{ display: popupContent.submitButton }}
                onClick={handleSubmitClick}
            >
                {popupLabel}
            </button>
        </div>
    );
}

export default ControlsPopup;