import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    selectedUser: '',
    error: false,
};

export const searchUsername = createSlice({
    name: 'username',
    initialState,
    reducers: {
        searchValue: (state, action) => {
            state.userName = action.payload.trim().toLowerCase();
        },
        selectUser: (state, action) => {
            state.selectedUser = action.payload.trim().toLowerCase();
        },
        resetRepo: (state, action) => {
            state.selectedUser = action.payload.trim().toLowerCase();
        },
        errorFound: (state, action) => {
            state.error = true;
        },
        resetState: (state, action) => {
            state.error = false
        }
    }
});

export const { searchValue, selectUser, resetRepo, errorFound, resetState } = searchUsername.actions

export default searchUsername.reducer;