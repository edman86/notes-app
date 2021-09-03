import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import randomColor from "randomcolor";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";

const App = () => {

  const [notes, setNotes] = useState([]);
  const [searchBarText, setSearchBarText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text, fontFamily) => {

    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString().split('.').join('/'),
      color: randomColor({
        luminosity: 'light'
      }),
      fontFamily: fontFamily
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);

  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkModeState) => !prevDarkModeState);
  };

  const handleSearchBar = (searchText) => {
    setSearchBarText(searchText);
  };

  // Filtered data of notes list
  const filteredNotes = notes.filter(note => {
    return note.text.toLowerCase().includes(searchBarText.toLowerCase());
  });

  // Component mount. Getting data from local storage
  useEffect(() => {
    
    // initialisation of the app width this data
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(notesFromLocalStorage);

    const isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setDarkMode(isDarkMode);

  }, []);

  // Component update. Update local storage
  useEffect(() => {
    
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  
  }, [notes, darkMode]);

  return (

    <main 
      className={`main ${darkMode && 'dark-mode'}`}
    >
      <Header toggleDarkMode={toggleDarkMode} />

      <div className="container">
        <SearchBar handleSearchBar={handleSearchBar} />
        <NotesList
          notes={filteredNotes}
          addNote={addNote}
          deleteNote={deleteNote}
        />
        <AddNote addNote={addNote} />
      </div>

    </main>
  );
};

export default App;
