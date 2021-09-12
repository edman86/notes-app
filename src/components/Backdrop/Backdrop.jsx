import React from 'react';
import { useSelector } from 'react-redux';

import './Backdrop.scss';

const Backdrop = () => {
    
    // isShow depends on AddNoteButton state.
    // If AddNoteButton's display style property is false,
    // isShow becomes true  
    const isShowBackdrop = useSelector((state) => state.addNoteButton.isHide);
    
    return (
        <div className={`backdrop ${isShowBackdrop && 'show'}`}></div>
    );
};

export default Backdrop;