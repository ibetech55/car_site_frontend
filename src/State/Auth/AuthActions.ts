/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Configs/axios";
import { LoginDto, LoginResponseDto } from "../../Data/AuthDtos/loginDtos";

export const authLogin = createAsyncThunk(
    "auth/login",
    async (values: LoginDto, { rejectWithValue }): Promise<LoginResponseDto> => {
      try {
        const { data } = await axios.post("/auth/login", values);
        return data;
      } catch (error: any) {
        return rejectWithValue(
          error.response.data.message
        ) as unknown as LoginResponseDto;
      }
    }
  );


  