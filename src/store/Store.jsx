import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import initialState from "./reducers/state/InitialState";
import { createMiddleware } from 'redux-api-middleware';


export const store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createMiddleware())})



