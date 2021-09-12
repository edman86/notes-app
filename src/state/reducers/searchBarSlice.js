import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: ''
}

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    
    reducers: {
        setSearchBarText: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const { setSearchBarText } = searchBarSlice.actions;
export default searchBarSlice.reducer;