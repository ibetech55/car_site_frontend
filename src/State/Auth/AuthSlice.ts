import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./AuthState";

const authSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {},
    extraReducers(builder) {
        
    },
})

export default authSlice.reducer;