/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Configs/axios";
import { GetMakeListDto } from "../../Data/BrandDtos/GetMakeListDto";
import { VITE_BRAND_API_URL } from "../../Configs/EnviromentVariables";
import { GetModelsByMakeIdDto } from "../../Data/BrandDtos/GetModelsByIdDto";

export const getMakeList = createAsyncThunk(
  "brand/getMakeList",
  async (_, { rejectWithValue }): Promise<GetMakeListDto[]> => {
    try {
      const { data } = await axios.get(`${VITE_BRAND_API_URL}/make/carList`, {
        params: { active: true },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message
      ) as unknown as GetMakeListDto[];
    }
  }
);

export const getModelsByMakeId = createAsyncThunk(
  "brand/getModelsByMakeId",
  async (id: string, { rejectWithValue }): Promise<GetModelsByMakeIdDto[]> => {
    try {
      const { data } = await axios.get(
        `${VITE_BRAND_API_URL}/model/modelsByMakeId/${id}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message
      ) as unknown as GetModelsByMakeIdDto[];
    }
  }
);
