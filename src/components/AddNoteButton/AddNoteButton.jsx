import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { click } from '../../state/reducers/addNoteButtonSlice';

import './AddNoteButton.scss';

const AddNoteButton = () => {
    
    const isHide = useSelector((state) => state.addNoteButton.isHide);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(click());
    };
    
    return (
        <button 
            className={`btn add-note-button ${isHide && 'hide'}`}
            onClick={handleClick}
        >
            <AiOutlineFileAdd />
        </button>
    );
};

export default AddNoteButton;