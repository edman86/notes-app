import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShow: false,
    content: 'Some Content'
}

const infoPopupSlice = createSlice({
    name: 'infopopup',
    initialState,
    reducers: {
        showInfoPopup: (state) => {
            state.isShow = true;
        },

        closeInfoPopup: (state) => {
            state.isShow = false;
        },

        setInfoPopupContent: (state, action) => {
            state.content = action.payload;
        }
    }
});

export const { showInfoPopup, closeInfoPopup, setInfoPopupContent } = infoPopupSlice.actions;

export default infoPopupSlice.reducer;