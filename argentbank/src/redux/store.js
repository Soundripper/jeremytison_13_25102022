import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducers/auth.reducer"
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

const persistConfig = {
    key: 'login',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const reducers = {
  loginRemember: persistedReducer,
}

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