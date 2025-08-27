import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { authApi } from "./features/authentication/auth.api";
import { walletApi } from "./features/wallet/wallet.api";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [walletApi.reducerPath]: walletApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware).concat(authApi.middleware).concat(walletApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch