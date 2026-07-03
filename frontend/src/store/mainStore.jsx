import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from './authSlice'


export const mainStore = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})