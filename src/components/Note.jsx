import { useEffect, useRef } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Draggable from 'react-draggable';

const Note = ({ note, deleteNote }) => {
    
    const  { id, text, date, color, fontFamily } = note;
    const refContainer = useRef(null);

    useEffect(() => {
        refContainer.current.classList.add('flip-in-hor-bottom');
    }, []);

    return (
        <Draggable>
            <article 
                className="note" 
                ref={refContainer}
                style={{backgroundColor: color}}
            >
                <p style={{fontFamily: fontFamily}}>{text}</p>
                <footer className="note-footer">
                    <small>{date}</small>
                    <MdDeleteForever 
                        className="delete-icon"
                        size="1.3em"
                        onClick={ () => deleteNote(id) }
                    />
                </footer>
            </article>
        </Draggable>
    );
};

export default Note;