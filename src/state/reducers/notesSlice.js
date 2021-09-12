import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import randomColor from "randomcolor";

import { getDataFromLocalStorage } from "../../components/utility/functions/workWithLocalStorage";
import { setDataToLocalStorage } from "../../components/utility/functions/workWithLocalStorage";

const notesData = getDataFromLocalStorage('notes') || [];

const initialState = {
    notes: notesData
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    
    reducers: {
        
        addNote: (state, action) => {
            const newNote = {
                id: nanoid(),
                title: action.payload.title,
                textHtml: action.payload.textHtml,
                textContent: action.payload.textContent,
                date: new Date().toLocaleDateString().split('.').join('/'),
                color: action.payload.noteColor || randomColor({
                    luminosity: 'light'
                }),
                imageUrl: action.payload.imageUrl
            };

            state.notes.push(newNote);

            // then updating the local storage
            setDataToLocalStorage('notes', state.notes);
        },  

        deleteNote: (state, action) => {
            const updatedNotes = state.notes.filter(note => note.id !== action.payload);
            state.notes = updatedNotes;

            // then updating the local storage
            setDataToLocalStorage('notes', state.notes);
        },

        updateNote: (state, action) => {
            const noteIndex = state.notes.findIndex(note => note.id === action.payload.id);
            state.notes[noteIndex] = action.payload;

            // then updating the local storage
            setDataToLocalStorage('notes', state.notes);
        }
    }
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;