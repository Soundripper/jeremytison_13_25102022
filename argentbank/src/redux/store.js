import { configureStore } from "@reduxjs/toolkit"
// import { loginSlice } from "../utils/reduxService"
import authReducer from "./reducers/auth.reducer"

export const store = configureStore({
    reducer: {
        login: authReducer
    },
})
