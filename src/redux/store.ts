import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { authApi } from "./features/authentication/auth.api";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware).concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch