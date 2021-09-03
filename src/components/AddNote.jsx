import { useEffect, useState, useRef} from "react";
import { useCurrentWidth } from "../customHooks/useCurrentWidth";
import { useCurrentHeight } from "../customHooks/useCurrentHeight";

import { AiOutlineFontColors } from 'react-icons/ai';
import { BiFontSize } from 'react-icons/bi';

import Draggable from 'react-draggable';

const AddNote = ({ addNote }) => {
    
    const [text, setText] = useState('');
    const [fontFamily, setFontFamily] = useState(`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`);

    const characterLimit = 200;
    
    // get width and height of AddNote component (not used)
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    // get ref for getting node (not used)
    const refContainer = useRef(null);

    // get window width and height (not used)
    let windowWidth = useCurrentWidth();
    let windowHeight = useCurrentHeight();
    

    // Changes font of the note
    const changeFont = () => {
        setFontFamily(`'Patrick Hand', cursive`);
    };

    // Changes font-size of the note
    const changeFontSize = () => {
        // TODO font change function
    };

    const handleTextChange = (e) => {  
        
        if (characterLimit - e.target.value.length >= 0) {
            const newNoteText = e.target.value;
            setText(newNoteText);
        }
    };

    const handleEvent = () => {
        
        if (!text.trim().length) {
            alert('Empty note');
            return;
        }

        addNote(text, fontFamily);
        setText('');

    };

    const handleClick = () => {
        handleEvent();
    };

    const handleKeyPress = (e) => {
        if (e.ctrlKey) {
            handleEvent();
        }
    };

    useEffect(() => {
        // set width and height of component (not used)
        setWidth(refContainer.current.getBoundingClientRect().width);
        setHeight(refContainer.current.getBoundingClientRect().height);

    }, [windowWidth, windowHeight]);

    return (
        /*
        The line below is not used and was commented, because does not work correctly.
        Can't get the right position of AddNote component 
        (position the component in the center of the screen).
        Solved this problem width CSS styles.
        */

        // <Draggable defaultPosition={{x: (windowWidth / 2) - width, y: (windowHeight / 2) - height}}>
        <Draggable>
            <div className="note new-note" ref={refContainer} onKeyPress={handleKeyPress}>
                <textarea
                    style={{fontFamily: fontFamily}}
                    onChange={handleTextChange}
                    value={text} 
                    rows="5"
                    placeholder="Type to add a text..."
                    onSelect={(e) => console.log(e)}
                ></textarea>
                <footer className="note-footer">
                    <small>{characterLimit - text.length} Remainings</small>
                    <AiOutlineFontColors 
                        className="font-icon" 
                        onClick={changeFont} 
                    />
                    <BiFontSize className="font-size-icon" />
                    <button 
                        type="button"
                        className="btn save-btn"
                        onClick={handleClick}
                    >
                        Add Note
                    </button>
                </footer>
            </div>
        </Draggable>
    );
};

export default AddNote;