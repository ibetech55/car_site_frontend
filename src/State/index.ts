import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth/AuthSlice";
import BrandSlice from "./Brand/BrandSlice";
import UserSlice from "./User/UserSlice";
import LocationSlice from "./Loaction/LocationSlice";
import CarSlice from "./Car/CarSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        brand: BrandSlice,
        user: UserSlice,
        location: LocationSlice,
        car: CarSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;