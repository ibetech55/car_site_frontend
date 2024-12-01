import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./CarState";
import { getFeaturesGrouped, postSellCar } from "./CarAction";
import { IFeaturesGrouped } from "../../Data/CarDtos/GetFeatureDtos";

const featureSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(getFeaturesGrouped.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                getFeaturesGrouped.fulfilled,
                (state, action: PayloadAction<IFeaturesGrouped[]>) => {
                    state.featuresGrouped = action.payload;
                    state.loading = false;
                }
            )
            .addCase(postSellCar.pending, (state) => {
                state.loading = true;
            })
            .addCase(postSellCar.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(postSellCar.rejected, (state) => {
                state.loading = false;
            })
    },
});
export default featureSlice.reducer;