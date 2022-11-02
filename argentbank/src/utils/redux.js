import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
// import { createAction } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        username: "",
        password: ""
      },
    reducers: {
        login: (state, action) => {
            state.login = action.payload;
        },
        logout: (state, action) => {
            state.login = null;
        }
    }
})

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    },
})

export const selectLogin = (state) => state.login.login;
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;