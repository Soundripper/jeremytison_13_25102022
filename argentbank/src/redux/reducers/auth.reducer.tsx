import {  createReducer } from "@reduxjs/toolkit"
import { succesfullLoginAction, logoutAction, updateFullnameAction, apiErrorAction } from "../actions/auth.actions";

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    token: null,
    apiError: false,
    rememberMe: false
}

export default createReducer(initialState, (builder) => {
    builder
    .addCase(succesfullLoginAction, (state, action) => {
        state.email = action.payload.email
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.token = action.payload.token
        state.apiError = false
        state.rememberMe = action.payload.rememberMe
    })
    .addCase(logoutAction, (state, action) => {
        return initialState;
    })
    .addCase(updateFullnameAction, (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.apiError = false
    })
    .addCase(apiErrorAction, (state, action) => {
        state.apiError = action.payload.apiError
    })
});