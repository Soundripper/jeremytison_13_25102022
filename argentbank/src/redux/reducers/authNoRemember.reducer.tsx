import {  createReducer } from "@reduxjs/toolkit"
import { succesfullLoginActionNR, logoutActionNR, updateFullnameActionNR, apiErrorActionNR } from "../actions/authNoRemember.actions";

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    token: null,
    apiError: false
}

export default createReducer(initialState, (builder) => {
    builder
    .addCase(succesfullLoginActionNR, (state, action) => {
        state.email = action.payload.email
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.token = action.payload.token
        state.apiError = false
    })
    .addCase(logoutActionNR, (state, action) => {
        // state.email = ""
        // state.firstName = ""
        // state.lastName = ""
        // state.token = null
        // state.apiError = false,
        return initialState;
    })
    .addCase(updateFullnameActionNR, (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.apiError = false
    })
    .addCase(apiErrorActionNR, (state, action) => {
        state.apiError = action.payload.apiError
        // state.apiError = true
    })
});