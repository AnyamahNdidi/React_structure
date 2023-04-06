import { Reducer } from "../Reducer"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
 
const Store = configureStore({
    reducer: {
         Reducer
     }
})
 
export default Store