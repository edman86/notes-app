import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { deleteNote, updateNote } from '../../state/reducers/notesSlice';
import { showInfoPopup, setInfoPopupContent } from '../../state/reducers/infoPopupSlice';

import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

import ControlsBar from '../ControlsBar/ControlsBar';

import './SelectedNote.scss';


const SelectedNote = () => {

    const { id } = useParams();
    const notes = useSelector(state => state.notes.notes);
    const note = notes.find(note => note.id === id);
    const dispatch = useDispatch();
    const history = useHistory();
    const refContainerNoteText = useRef(null);

    const [editMode, setEditMode] = useState(false);

    const [html, setHtml] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [noteColor, setNoteColor] = useState('');

    const handleDeleteSelectedNote = () => {
        dispatch(deleteNote(id));
        dispatch(setInfoPopupContent('Note deleted'));
        dispatch(showInfoPopup());
        
        history.push('/');
    };

    const closeSelectedNote = () => {
        history.push('/');
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    // Adding text
    const handleTextAdding = (e) => {
        setHtml(e.target.innerHTML);
    };

    const saveChanges = () => {
        
        const updatedNote = { ...note };

        updatedNote.textHtml = html;
        updatedNote.textContent = refContainerNoteText.current.textContent;
        updatedNote.color = noteColor;
        updatedNote.imageUrl = imageUrl;

        dispatch(updateNote(updatedNote));

        setEditMode(!editMode);

        dispatch(setInfoPopupContent('Changes saved'));
        dispatch(showInfoPopup());
    };

    // Note initialization
    useEffect(() => {

        if (!note) {
            return;
        }

        try {
            setImageUrl(note.imageUrl);
            setNoteColor(note.color);
            setHtml(note.textHtml);
            refContainerNoteText.current.innerHTML = note.textHtml;
        } catch (err) {
            throw new Error(err.message);
        }

    }, []);

    if (!note) {
        return (
            <div className="error">
                <h1>404</h1>
                <h2>Note with this id is not exist...</h2>
                <button
                    type="button"
                    className="btn error-btn"
                    onClick={() => history.push('/')}
                >
                    Return to dashboard
                </button>
            </div>
        );
    };

    return (
        <article
            className="selected-note"
            style={{ backgroundColor: noteColor }}
        >
            <AiOutlineClose
                className="selected-note-close-btn"
                onClick={closeSelectedNote}
            />

            <img src={imageUrl} className="selected-note-inline-image" alt="" />

            <h2 className="selected-note-title">{note.title}</h2>

            <p
                className="selected-note-text"
                ref={refContainerNoteText}
                style={{ fontFamily: note.fontFamily }}
                contentEditable={editMode}
                onKeyUp={handleTextAdding}
            >
            </p>

            <footer className="selected-note-footer">

                {editMode &&
                    <ControlsBar
                        setImageUrl={setImageUrl}
                        updateHtml={setHtml}
                        refContainerTextarea={refContainerNoteText.current}
                        setNoteColor={setNoteColor}
                    />
                }

                <section className="selected-note-footer-section">
                    <small>{note.date}</small>

                    <button
                        type={`button ${!editMode && 'edit-btn'}`}
                        className={`btn edit-mode ${!editMode && 'edit-btn'}`}
                        title="Edit Note"
                        onClick={toggleEditMode}
                    >
                        {!editMode ? <BiEdit size="2rem" /> : 'Close Editing'}
                    </button>

                    {editMode &&
                        <button
                            className="btn edit-mode"
                            onClick={saveChanges}
                        >
                            Save Changes
                        </button>}

                    <button
                        type="button"
                        className="btn selected-note-delete-btn"
                        title="Delete Note"
                        onClick={handleDeleteSelectedNote}
                    >
                        <MdDeleteForever />
                    </button>
                </section>

            </footer>
        </article>
    );
};

export default SelectedNote;