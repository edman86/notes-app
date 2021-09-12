import React from 'react';
import { useClickOutside } from '../../../customHooks/useClickOuside';
import './ColorsPopup.scss';


const ColorsPopup = ({ isColorPopupOpen, setIsColorPopupOpen, addColor}) => {
    
    // handle outside click
    const domNodeRef = useClickOutside(setIsColorPopupOpen);
    
    return (
        <div
            className="colors-popup"
            style={{ display: isColorPopupOpen ? 'flex' : 'none' }}
            ref={domNodeRef}
            onClick={() => setIsColorPopupOpen(!isColorPopupOpen)}
        >
            <div className="colors">
                <div
                    className="color"
                    id="#feefc3"
                    style={{ backgroundColor: "#feefc3" }}
                    onClick={() => addColor('#feefc3')}
                >
                </div>
                <div
                    className="color"
                    id="#f28b82"
                    style={{ backgroundColor: "#f28b82" }}
                    onClick={() => addColor('#f28b82')}
                >
                </div>
                <div
                    className="color"
                    id="#fbbc04"
                    style={{ backgroundColor: "#fbbc04" }}
                    onClick={() => addColor('#fbbc04')}
                >
                </div>
                <div
                    className="color"
                    id="#ccff90"
                    style={{ backgroundColor: "#ccff90" }}
                    onClick={() => addColor('#ccff90')}
                >
                </div>
                <div
                    className="color"
                    id="#a7ffeb"
                    style={{ backgroundColor: "#a7ffeb" }}
                    onClick={() => addColor('#a7ffeb')}
                >
                </div>
                <div
                    className="color"
                    id="#cbf0f8"
                    style={{ backgroundColor: "#cbf0f8" }}
                    onClick={() => addColor('#cbf0f8')}
                >
                </div>
                <div
                    className="color"
                    id="#aecbfa"
                    style={{ backgroundColor: "#aecbfa" }}
                    onClick={() => addColor('#aecbfa')}
                >
                </div>
                <div
                    className="color"
                    id="#fdcfe8"
                    style={{ backgroundColor: "#fdcfe8" }}
                    onClick={() => addColor('#fdcfe8')}
                >
                </div>
                <div
                    className="color"
                    id="#cf9fff"
                    style={{ backgroundColor: "#cf9fff" }}
                    onClick={() => addColor('#cf9fff')}
                >
                </div>
            </div>
        </div>
    );
};

export default ColorsPopup;