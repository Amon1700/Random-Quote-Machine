import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from '../freatures/quoteSlice'

export const store = configureStore({
    reducer: quoteReducer
})