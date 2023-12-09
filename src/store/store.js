import { configureStore } from "@reduxjs/toolkit";
import juniReducer from "./junistore"
import appReducer from "./appstore"
export const store=configureStore({
    reducer:{
        juni:juniReducer,
        app:appReducer,
    }
})