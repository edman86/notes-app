import { useSelector } from 'react-redux';
import Note from '../Note/Note';
import { useCurrentWidth } from '../../customHooks/useCurrentWidth';

import AddNoteButton from '../AddNoteButton/AddNoteButton';
import Backdrop from '../Backdrop/Backdrop';
import NoteEditor from '../NoteEditor/NoteEditor';

import './Dashboard.scss';

const Dashboard = () => {

    const notes = useSelector((state) => state.notes.notes);
    const searchBarText = useSelector((state) => state.searchBar.text);
    
    // getting window width with every resize
    const windowWidth = useCurrentWidth();
   
    // filtered data of notes list
    const filteredNotes = notes.filter(note => {
        return note.textContent.toLowerCase().includes(searchBarText.trim().toLowerCase())
        || note.title.toLowerCase().includes(searchBarText.trim().toLowerCase());
    });

    return (
        <section className="dashboard">
            {filteredNotes.map(note => {
                return (
                    <Note
                        key={note.id}
                        note={note}
                        windowWidth={windowWidth}
                    />
                );
            })}

            <AddNoteButton />
            <Backdrop />
            <NoteEditor />

        </section>
    );
};

export default Dashboard;