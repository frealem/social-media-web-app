import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from "./Api"
import authReducer from './authSlice'
import themeReducer from './themeSlice'
export const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authReducer,
        theme:themeReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})