import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./FeatureState";
import { getFeaturesGrouped } from "./FeatureAction";
import { IFeaturesGrouped } from "../../Data/CarDtos/GetFeatureDtos";

const featureSlice = createSlice({
    name: "feature",
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
    },
});
export default featureSlice.reducer;