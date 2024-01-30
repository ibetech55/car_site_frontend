import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./BrandState";
import { getMakeList, getModelsByMakeId } from "./BrandActions";
import { GetMakeListDto } from "../../Data/BrandDtos/GetMakeListDto";
import { GetModelsByMakeIdDto } from "../../Data/BrandDtos/GetModelsByIdDto";

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    checkModelsOptions:(state) => {
      state.models = []
      console.log(state.models)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getMakeList.pending, (state) => {
        state.loadingMakes = true;
      })
      .addCase(
        getMakeList.fulfilled,
        (state, action: PayloadAction<GetMakeListDto[]>) => {
          state.makes = action.payload.map((x:GetMakeListDto)=>({
            label: x.makeName,
            value: x.id,
          }));
          state.loadingMakes = false;
        }
      )
      .addCase(getModelsByMakeId.pending, (state) => {
        state.loadingModels = true;
      })
      .addCase(
        getModelsByMakeId.fulfilled,
        (state, action: PayloadAction<GetModelsByMakeIdDto[]>) => {
          state.models = action.payload.map((x:GetModelsByMakeIdDto)=>({
            label: x.modelName,
            value: x.id,
          }));
          state.loadingModels = false;
        }
      );
  },
});
export default brandSlice.reducer;
export const { checkModelsOptions} = brandSlice.actions;