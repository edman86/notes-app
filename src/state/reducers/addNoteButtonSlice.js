import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHide: false
};

export const addNoteButtonSlice = createSlice({
    name: 'addNoteButton',
    initialState,
    
    reducers: {
        click: (state) => {
            state.isHide = !state.isHide
        }
    }
});

export const { click } = addNoteButtonSlice.actions;

export default addNoteButtonSlice.reducer;