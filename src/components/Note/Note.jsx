import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteNote } from '../../state/reducers/notesSlice';
import { showInfoPopup, setInfoPopupContent } from '../../state/reducers/infoPopupSlice';

import { MdDeleteForever } from 'react-icons/md';

import './Note.scss';

const Note = ({ note, windowWidth }) => {
    
    const { id, title, textHtml, textContent, date, color, imageUrl } = note;

    const refContainerNote = useRef(null);
    const refContainerNoteText = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    // opens SelectedNote component with route "/:id" 
    const openSelectedNote = () => {
        history.push(`/${id}`);
    };
    
    // double tap on note is opening it on all window
    const tappingNote = () => {
        openSelectedNote();
    };

    const handleDeleteNote = () => {
        dispatch(deleteNote(id));
        dispatch(setInfoPopupContent('Note deleted'));
        dispatch(showInfoPopup());
    };
    
    useEffect(() => { 
        // Adding text content in use effect (when component mounth),
        // because note text is HTML
        refContainerNoteText.current.innerHTML = textHtml;
    }, []);
    
    return (
            <article 
                className="note"
                ref={refContainerNote}
                style={{backgroundColor: color}}
                onDoubleClick={tappingNote}
            >
                <img src={imageUrl} className="inline-image" alt="" />
                
                <h2 className="note-title">{title}</h2>
                
                <p
                    className="note-text" 
                    ref={refContainerNoteText}
                >
                </p>
                <p className="hidden-text">
                    {windowWidth < 576 && textContent.slice(0, 100) + '...'}
                </p>
                <footer className="note-footer">
                    <small>{date}</small>
                    <MdDeleteForever 
                        className="delete-icon"
                        size="1.3em"
                        onClick={ handleDeleteNote }
                    />
                </footer>
            </article>
    );
};

export default Note;