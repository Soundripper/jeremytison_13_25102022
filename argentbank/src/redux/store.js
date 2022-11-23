import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducers/auth.reducer"
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import authNoRememberReducer from "./reducers/authNoRemember.reducer";

const persistConfig = {
    key: 'login',
    storage,
}
const noPersistConfig = {
  key: 'login',
  storage,
  blacklist: ['email', 'firstName', 'lastName', 'token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const persistedReducerNoRemember = persistReducer(noPersistConfig, authNoRememberReducer)

const reducers = combineReducers({
  loginRemember: persistedReducer,
  loginNoRemember: persistedReducerNoRemember
})

export const store = configureStore({
    reducer: reducers
        ,middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)