import {  createReducer } from "@reduxjs/toolkit"
import { succesfullLoginAction, logoutAction, updateFullnameAction, apiErrorAction } from "../actions/auth.actions";

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    token: null,
    apiError: ''
}

export default createReducer(initialState, (builder) => {
    builder.addCase(succesfullLoginAction, (state, action) => {
        state.email = action.payload.email
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.token = action.payload.token
        state.apiError = ''
    })
    .addCase(logoutAction, (state, action) => {
        state.email = ""
        state.firstName = ""
        state.lastName = ""
        state.token = null
        state.apiError = ''
    })
    .addCase(updateFullnameAction, (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.apiError = ''
    })
    .addCase(apiErrorAction, (state, action) => {
        state.apiError = action.payload.apiError
    })
});