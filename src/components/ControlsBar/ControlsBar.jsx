import React from 'react';
import { useState } from 'react';

import ControlsPopup from './ControlsPopup/ControlsPopup';
import ColorsPopup from './ColorsPopup/ColorsPopup';

import { BiFont } from 'react-icons/bi';
import { BiFontSize } from 'react-icons/bi';
import { AiOutlineBold } from 'react-icons/ai';
import { AiOutlineItalic } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { BiImage } from 'react-icons/bi';
import { BiPalette } from 'react-icons/bi';

import './ControlsBar.scss';


const ControlsBar = ({ setImageUrl, updateHtml, refContainerTextarea, setNoteColor }) => {

    const [isControlsPopupOpen, setIsControlsPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState('default');
    const [controlsPopupPosition, setControlsPopupPosition] = useState(0);
    const [isColorPopupOpen, setIsColorPopupOpen] = useState(false);

    const openCloseControlsPopup = (e) => {
        
        // Dynamically sets position (offset from left border of NoteEditor)
        // to ControlsPopup component
        setControlsPopupPosition(e.currentTarget.offsetLeft);
        
        // Open or close popup
        if (isControlsPopupOpen && popupType === e.currentTarget.id) {
            setIsControlsPopupOpen(false);
        } else if (isControlsPopupOpen && popupType !== e.currentTarget.id) {
            setPopupType(e.currentTarget.id);
        } else {
            setIsControlsPopupOpen(!isControlsPopupOpen);
            setPopupType(e.currentTarget.id);
        }
    };

    // If the parameter "value" is not used, 
    // then an empty string must be passed to "value".
    // Type gets from button id
    const editTextarea = (type, value) => {
        if (value) {
            if (type === 'addImage') {
                setImageUrl(value);
            } else {
                document.execCommand(type, false, value);
            }
        } else {
            document.execCommand(type);
        }
        updateHtml(refContainerTextarea.innerHTML);
    };

    const editTextBold = (e) => {
        document.execCommand('bold');
        updateHtml(refContainerTextarea.innerHTML);
    };

    const editTextItalic = () => {
        document.execCommand('italic');
        updateHtml(refContainerTextarea.innerHTML);
    };

    const addColor = (color) => {
        setNoteColor(color);
    };

    return (
        <div className="controls-bar">
            <ul className="controls">
                <li className="controls-item">
                    <button
                        type="button"
                        id="fontName"
                        className="btn controls-btn"
                        onClick={openCloseControlsPopup}
                    >
                        <BiFont />
                    </button>
                </li>
                <li className="controls-item">
                    <button
                        type="button"
                        id="fontSize"
                        className="btn controls-btn"
                        onClick={openCloseControlsPopup}
                    >
                        <BiFontSize />
                    </button>
                </li>
                <li className="controls-item">
                    <button
                        type="button"
                        id="bold"
                        className="btn controls-btn"
                        onClick={editTextBold}
                    >
                        <AiOutlineBold />
                    </button>
                </li>
                <li className="controls-item">
                    <button
                        type="button"
                        id="italic"
                        className="btn controls-btn"
                        onClick={editTextItalic}
                    >
                        <AiOutlineItalic />
                    </button>
                </li>
                <li className="controls-item">
                    <button
                        type="button"
                        id="createLink"
                        className="btn controls-btn"
                        onClick={openCloseControlsPopup}
                    >
                        <BiLink />
                    </button>
                </li>
                <li className="controls-item">
                    <button
                        type="button"
                        id="addImage"
                        className="btn controls-btn"
                        onClick={openCloseControlsPopup}
                    >
                        <BiImage />
                    </button>
                </li>
                <li className="controls-item">
                    <button
                        type="button"
                        id="noteColor"
                        className="btn controls-btn"
                        onClick={ () => setIsColorPopupOpen(!isColorPopupOpen) }    
                    >
                        <BiPalette />
                    </button>
                </li>
            </ul>

            <ControlsPopup
                isControlsPopupOpen={isControlsPopupOpen}
                popupType={popupType}
                setIsControlsPopupOpen={setIsControlsPopupOpen}
                controlsPopupPosition={controlsPopupPosition}
                editTextarea={editTextarea}
            />

            <ColorsPopup 
                isColorPopupOpen={isColorPopupOpen}
                setIsColorPopupOpen={setIsColorPopupOpen}
                addColor={addColor}
            />

        </div>
    )
};

export default ControlsBar;