import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    initialState: false,
    name: 'authenticate',
    reducers: {
        isLoggedIn : (state) => {return state = true},
    },
});

export const { isLoggedIn } = authenticationSlice.actions;
export default authenticationSlice.reducer;
