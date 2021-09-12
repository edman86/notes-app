import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    
    default: {
        inputField: 'none',
        submitButton: 'none',
        content: []
    },

    fontName: {
        inputField: 'none',
        submitButton: 'none',
        content: [
            { id: nanoid(), name: 'Roboto (default)', value: 'Roboto'},
            { id: nanoid(), name: 'Courier New', value: 'Courier New'},
            { id: nanoid(), name: 'Times New Roman', value: 'Times New Roman'},
            { id: nanoid(), name: 'Patrick Hand', value: 'Patrick Hand'},
            { id: nanoid(), name: 'Caveat', value: 'Caveat'},
            { id: nanoid(), name: 'Nanum Pen Script', value: 'Nanum Pen Script'},
            { id: nanoid(), name: 'Special Elite', value: 'Special Elite'},
            { id: nanoid(), name: 'Fredericka the Great', value: 'Fredericka the Great'},
            { id: nanoid(), name: 'Faster One', value: 'Faster One'},
        ]
    },

    fontSize: {
        inputField: 'none',
        submitButton: 'none',
        content: [
            { id: nanoid(), name: '10px', value: '1' },
            { id: nanoid(), name: '13px', value: '2' },
            { id: nanoid(), name: '16px', value: '3' },
            { id: nanoid(), name: '18px', value: '4' },
            { id: nanoid(), name: '24px', value: '5' },
            { id: nanoid(), name: '32px', value: '6' },
            { id: nanoid(), name: '48px', value: '7' },
        ]
    },

    createLink: {
        inputField: 'block',
        submitButton: 'block',
        content: []
    },

    addImage: {
        inputField: 'block',
        submitButton: 'block',
        content: []
    },

}

export const controlsPopupSlice = createSlice({
    name: 'controlsPopup',
    initialState,
    reducers: {

    }
});

//export const {} = controlsPopupSlice.actions;

export default controlsPopupSlice.reducer;