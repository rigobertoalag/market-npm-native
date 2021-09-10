import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import dataUserReducer from "./features/data/dataUser";

export default configureStore({
    reducer: {
        counter: counterReducer,
        dataUser: dataUserReducer
    }
})