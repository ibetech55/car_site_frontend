/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Configs/axios";
import { IFeaturesGrouped } from "../../Data/CarDtos/GetFeatureDtos";

export const getFeaturesGrouped = createAsyncThunk(
    "car/getFeaturesGrouped",
    async (_, { rejectWithValue }): Promise<IFeaturesGrouped[]> => {
        try {
            const { data } = await axios.get(`http://localhost:5004/car_api/feature/get-features-grouped`);
            return data;
        } catch (error: any) {
            return rejectWithValue(
                error.response.data.message
            ) as unknown as IFeaturesGrouped[];
        }
    }
);
