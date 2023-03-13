import AutocompleteReducer from "./AutocompleteReducer"
import ShoppingCartReducer from "./ShoppingCartReducer";
import ContentReducer from "./ContentReducer";
// import { combineReducers } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

const rootReducer = combineReducers( {
    AutocompleteReducer,
    ContentReducer,
    ShoppingCartReducer
})

export default rootReducer;
