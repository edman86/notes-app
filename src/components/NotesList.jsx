import Note from './Note';

const NotesList = ({ notes, deleteNote }) => {

    return (
        <section className="note-list">
            
            {notes.map(note => {
                return (
                    <Note 
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote} 
                    />
                );
            })}
            
        </section>
    );
};

export default NotesList;