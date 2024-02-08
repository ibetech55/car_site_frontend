/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Configs/axios";
import { VITE_USER_API_URL } from "../../Configs/EnviromentVariables";
import { GetUserDto } from "../../Data/UserDtos/GetUserDto";
import { GetByAccessCodeTokenDto } from "../../Data/UserDtos/GetByAccessCodeTokenDto";
import { PutConfirmAccessCodeDto } from "../../Data/UserDtos/ConfirmAccessCodeDtos";

export const createPrivateUser = createAsyncThunk(
  "user/createPrivateUser",
  async (formData: FormData, { rejectWithValue }): Promise<string> => {
    try {
      const { data } = await axios.post(
        `${VITE_USER_API_URL}/privateUser`,
        formData
      );
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.message) as unknown as string;
    }
  }
);

export const createDealership = createAsyncThunk(
  "user/createDealership",
  async (formData: FormData, { rejectWithValue }): Promise<string> => {
    try {
      const { data } = await axios.post(
        `${VITE_USER_API_URL}/dealership`,
        formData
      );
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.message) as unknown as string;
    }
  }
);

export const confirmCreatedUser = createAsyncThunk(
  "user/confirmCreatedUser",
  async (token: string, { rejectWithValue }): Promise<boolean> => {
    try {
      const { data } = await axios.get(
        `${VITE_USER_API_URL}/user/confirmCreatedUser/${token}`
      );
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.message) as unknown as string;
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id: string, { rejectWithValue }): Promise<GetUserDto> => {
    try {
      const { data } = await axios.get(`${VITE_USER_API_URL}/user/${id}`);
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.message) as unknown as string;
    }
  }
);

export const getByAccessCodeToken = createAsyncThunk(
  "user/getByAccessCodeToken",
  async (
    token: string,
    { rejectWithValue }
  ): Promise<GetByAccessCodeTokenDto> => {
    try {
      const { data } = await axios.get(`${VITE_USER_API_URL}/access/${token}`);
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.message) as unknown as string;
    }
  }
);

export const confirmAccessCode = createAsyncThunk(
  "user/confirmAccessCode",
  async (
    values: PutConfirmAccessCodeDto,
    { rejectWithValue }
  ): Promise<boolean> => {
    try {
      const { data } = await axios.put(
        `${VITE_USER_API_URL}/access/confirmAccessCode/${values.id}`,
        {
          accessCode: values.accessCode,
          accessCodeToken: values.accessCodeToken,
        }
      );
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.message) as unknown as string;
    }
  }
);
