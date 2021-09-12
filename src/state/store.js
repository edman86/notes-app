import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './reducers/notesSlice';
import searchBarReducer from "./reducers/searchBarSlice";
import addNoteButtonReducer from "./reducers/addNoteButtonSlice";
import controlsPopupReducer from "./reducers/controlsPopup";
import infoPopupReducer from "./reducers/infoPopupSlice";

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        searchBar: searchBarReducer,
        addNoteButton: addNoteButtonReducer,
        controlsPopup: controlsPopupReducer,
        infoPopup: infoPopupReducer
    }
});