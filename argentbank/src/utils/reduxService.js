import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { useDispatch } from 'react-redux';
// import { createAction } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        token: null
      },
    reducers: {
        loginReducer: (state, action) => {
            state.token = action.payload.token;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
        logout: (state, action) => {
            state.token = null;
        }
    },
    // extraReducers: {
    //     [userLogin.fulfilled]: (state, action) => {
    //       state.isLoggedIn = true;
    //       state.user = action.payload.user;
    //       console.log();
    //     },
    //     [userLogin.rejected]: (state, action) => {
    //       state.isLoggedIn = false;
    //       state.user = null;
    //     },
    //     [userLogin.fulfilled]: (state, action) => {
    //       state.isLoggedIn = false;
    //       state.user = null;
    //     },
    //   },
})

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    },
})

export const selectLogin = (state) => state.login;
export const { loginReducer, logout } = loginSlice.actions;
export default loginSlice.reducer;