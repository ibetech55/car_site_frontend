import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth/AuthSlice";
import BrandSlice from "./Brand/BrandSlice";

export const store = configureStore({
reducer:{
    auth: AuthSlice,
    brand: BrandSlice
}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;