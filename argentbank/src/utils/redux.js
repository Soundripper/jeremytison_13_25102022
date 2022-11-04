import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { useDispatch } from 'react-redux';
// import { createAction } from '@reduxjs/toolkit';



export const userLogin = ({ email, password }) => {
    const loginUrl = `http://localhost:3001/api/v1/user/login/`

    const loginInput = { email, password };
    console.log(loginInput);
    return () => {  // don't forget to use dispatch here!
        return fetch(loginUrl, {
        method: 'POST',
        headers: {  // these could be different for your API call
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(loginInput),
        body: JSON.stringify(loginInput),
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.msg === 'success') { // response success checking logic could differ
            // dispatch(setLoginState({ ...json, email: email, password: password })); // our action is called here
            console.log('Login succes', 'OK is correct');
            } else {
            console.log('Login Failed', 'Username or Password is incorrect');
            console.log(loginInput);
            }
        })
        .catch((err) => {
            console.log('Login Failed', 'Some error occured, please retry');
            console.log(err);
        });
    };
};

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: "",
        password: ""
      },
    reducers: {
        // login: (state, action) => {
        //     state.login = action.payload;
        // },
        // logout: (state, action) => {
        //     state.login = null;
        // }
    },
    extraReducers: {
        [userLogin.fulfilled]: (state, action) => {
          state.isLoggedIn = true;
          state.user = action.payload.user;
          console.log();
        },
        [userLogin.rejected]: (state, action) => {
          state.isLoggedIn = false;
          state.user = null;
        },
        [userLogin.fulfilled]: (state, action) => {
          state.isLoggedIn = false;
          state.user = null;
        },
      },
})

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    },
})

export const selectLogin = (state) => state.login.login;
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;