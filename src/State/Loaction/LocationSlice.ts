import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./LocationState";
import { getCityList, getStateList, getZipCode } from "./LocationActions";
import {
  IGetCityList,
  IGetStateList,
  IZipCode,
} from "../../Data/LocationDtos/LocationDtos";

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStateList.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getStateList.fulfilled,
        (state, action: PayloadAction<IGetStateList[]>) => {
          state.loading = false;
          state.stateList = action.payload.map((x: IGetStateList) => ({
            value: x.stateCode,
            label: x.name,
          }));
        }
      )
      .addCase(getCityList.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCityList.fulfilled,
        (state, action: PayloadAction<IGetCityList[]>) => {
          state.loading = false;
          state.cityList = action.payload.map((x: IGetCityList) => ({
            value: x.name,
            label: x.name,
          }));
        }
      )
      .addCase(
        getZipCode.fulfilled,
        (state, action: PayloadAction<IZipCode>) => {
          state.loading = false;
          state.zipCode = action.payload;
        }
      );
  },
});
export default locationSlice.reducer;
