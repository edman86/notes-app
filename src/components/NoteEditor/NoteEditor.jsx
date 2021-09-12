import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../state/reducers/notesSlice";
import { click } from "../../state/reducers/addNoteButtonSlice";

import { showInfoPopup, setInfoPopupContent } from "../../state/reducers/infoPopupSlice";

import { AiOutlineClose } from 'react-icons/ai';

import ControlsBar from "../ControlsBar/ControlsBar";

import './NoteEditor.scss';

const NoteEditor = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [html, setHtml] = useState('');

    const [imageUrl, setImageUrl] = useState('');
    const [noteColor, setNoteColor] = useState('');

    const characterLimit = 200;

    const dispatch = useDispatch();

    const refContainerTextarea = useRef(null);

    // isShow depends on AddNoteButton state.
    // If AddNoteButton's display style property is false,
    // isShow becomes true
    const isShowNoteEditor = useSelector((state) => state.addNoteButton.isHide);

    // Updates state from textarea html
    const updateHtml = (html) => {
        setHtml(html);
    }

    // Triggers this event when user is clicks the "save note" button
    const handleEvent = () => {
        if (!text.trim().length) {
            
            // show info popup
            dispatch(setInfoPopupContent("Can't save a note without text"));
            dispatch(showInfoPopup());

            return;
        }

        dispatch(addNote({
            title: title,
            textHtml: html,
            textContent: text,
            noteColor,
            imageUrl
        }));

        // Dispatching AddNodeButton action "click", it triggers
        // the isHide state property of AddNodeButton and makes display property
        // of  NoteEditor and Backdrop components is none. 
        // This components display style property depends on AddNoteButton state.  
        dispatch(click());

        // clear the title
        setTitle('');
        
        // clear text field
        setText('');

        // clear state data of html
        setHtml('');

        // clear image url
        setImageUrl('');

        // clear color
        setNoteColor('');
    };

    // Closing editor without save note
    const closeEditor = () => {
        dispatch(click());
    };

    // Adding text
    const handleTextAdding = (e) => {
        setText(e.target.textContent);
        setHtml(e.target.innerHTML);
    };

    // Create note
    const handleClick = () => {
        handleEvent();
    };

    // Create note when pressed keys "ctrl + enter"
    const handleKeyPress = (e) => {
        if (e.ctrlKey) {
            handleEvent();
        }
    };

    // handle paste from clipboard
    const pasteText = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('Text');
        document.execCommand('insertText', false, text);
    };

    const addNoteTitle = (e) => {
        setTitle(e.target.value);
    }

    useEffect(() => {

        // Making restrictions for text adding. The limit is 200 characters
        // If user taped 200 chars in textarea - changing contentEditable property on false,
        // so the user will not be able to enter any further text. 
        if (characterLimit - text.length === 0) {
            refContainerTextarea.current.contentEditable = "false";

            // when user clicks "save note", state of "text" is change on default ("").
            // So the text.length becomes 0 and the property "contentEditable" is set to true.  
        } else if (text.length === 0) {
            refContainerTextarea.current.contentEditable = "true";
            refContainerTextarea.current.innerHTML = "";
        }
    }, [text]);

    return (
        <div
            className={`note-editor ${isShowNoteEditor && 'show'}`}
            onKeyPress={handleKeyPress}
        >
            <AiOutlineClose
                className="note-editor-close-btn"
                onClick={closeEditor}
            />

            <input 
                className="note-editor-title"
                type="text"
                value={title}
                placeholder="Add title..."
                onChange={addNoteTitle} 
            />

            <img src={imageUrl} className="note-image" alt="" />
            
            <p
                className="textarea"
                contentEditable="true"
                data-placeholder="Add the text..."
                ref={refContainerTextarea}
                onKeyUp={handleTextAdding}
                onPaste={pasteText}
            >
            </p>

            <footer className="note-editor-footer">
                
                <ControlsBar 
                    setImageUrl={setImageUrl}
                    setNoteColor={setNoteColor}
                    updateHtml={updateHtml} 
                    refContainerTextarea={refContainerTextarea.current}
                />
                
                <section className="note-editor-footer-section">
                    <small>{characterLimit - text.length} Remainings</small>
                    <button
                        type="button"
                        className="btn save-btn"
                        onClick={handleClick}
                    >
                        Save Note
                    </button>
                </section>    
            </footer>
        </div>
    );
};

export default NoteEditor;