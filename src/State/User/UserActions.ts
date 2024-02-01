/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Configs/axios";
import { VITE_USER_API_URL } from "../../Configs/EnviromentVariables";

export const createPrivateUser = createAsyncThunk(
    "user/createPrivateUser",
    async (formData:FormData, { rejectWithValue }): Promise<boolean> => {
      try {
        const { data } = await axios.post(`${VITE_USER_API_URL}/privateUser`, formData);
        return data;
      } catch (error: any) {
        return rejectWithValue(
          error.response.data.message
        ) as unknown as boolean;
      }
    }
  );

  export const createDealership = createAsyncThunk(
    "user/createDealership",
    async (formData:FormData, { rejectWithValue }): Promise<boolean> => {
      try {
        const { data } = await axios.post(`${VITE_USER_API_URL}/dealership`, formData);
        return data;
      } catch (error: any) {
        return rejectWithValue(
          error.response.data.message
        ) as unknown as boolean;
      }
    }
  );


  