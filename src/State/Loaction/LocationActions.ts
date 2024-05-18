/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Configs/axios";
import { IGetCityList, IGetStateList } from "../../Data/LocationDtos/LocationDtos";


export const getStateList = createAsyncThunk(
    "location/getStateList",
    async (_, { rejectWithValue }): Promise<IGetStateList[]> => {
      try {
        const { data } = await axios.get(`http://localhost:5010/location_api/states`);
        return data;
      } catch (error: any) {
        throw rejectWithValue(
          error.response.data.message
        ) as unknown as string;
      }
    }
  );

  export const getCityList = createAsyncThunk(
    "location/getCityList",
    async (stateCode:string, { rejectWithValue }): Promise<IGetCityList[]> => {
      try {
        const { data } = await axios.get(`http://localhost:5010/location_api/cities/${stateCode}`);
        return data;
      } catch (error: any) {
        throw rejectWithValue(
          error.response.data.message
        ) as unknown as string;
      }
    }
  );


  