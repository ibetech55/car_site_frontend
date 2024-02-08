import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { accessCodeTokenResponse, initUser, initialState } from "./UserState";
import { confirmAccessCode, confirmCreatedUser, createDealership, createPrivateUser, getByAccessCodeToken, getUserById } from "./UserActions";
import { CREATED_USER_TOKEN } from "../../Configs/Constants/User";
import { GetUserDto } from "../../Data/UserDtos/GetUserDto";
import { GetByAccessCodeTokenDto } from "../../Data/UserDtos/GetByAccessCodeTokenDto";
import { getCookie, removeCookie } from "../../Utils/HandleCookie";
import { LOGIN_TOKEN } from "../../Configs/Constants/Tokens";
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorRegisterUser:(state)=>{
      state.errorRegisterUser = ''
    },
    clearAccessCodeError:(state)=>{
      state.confirmAccessCodeError = ''
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createPrivateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPrivateUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.errorRegisterUser = "";
        sessionStorage.setItem(CREATED_USER_TOKEN, action.payload)
      })
      .addCase(createPrivateUser.rejected, (state, action) => {
        state.errorRegisterUser = action.payload as string;
      })
      .addCase(createDealership.pending, (state) => {
        state.loading = true;
        state.errorRegisterUser = "";
      })
      .addCase(createDealership.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.errorRegisterUser = "";
        sessionStorage.setItem(CREATED_USER_TOKEN, action.payload)
      })
      .addCase(createDealership.rejected, (state, action) => {
        state.errorRegisterUser = action.payload as string;
      })
      .addCase(confirmCreatedUser.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.loading = false;
        state.confirmCreatedUser = action.payload
      })
      .addCase(confirmCreatedUser.rejected, (state) => {
        state.confirmCreatedUser = false
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<GetUserDto>) => {
        state.loading = false;
        state.user = action.payload;     
      })
      .addCase(getUserById.rejected, (state) => {
        state.user = initUser
        state.loading = false
      })
      .addCase(getByAccessCodeToken.fulfilled, (state, action: PayloadAction<GetByAccessCodeTokenDto>) => {
        state.loading = false;
        state.accessCodeTokenResponse = action.payload;     
      })
      .addCase(getByAccessCodeToken.rejected, (state) => {
        state.accessCodeTokenResponse = accessCodeTokenResponse
        state.loading = false
        removeCookie(LOGIN_TOKEN)
        window.location.href = "/";
      })
      .addCase(confirmAccessCode.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.loading = false;
        state.confirmAccessCodeResponse = action.payload; 
        if(getCookie(LOGIN_TOKEN)) {
          window.location.href = "/"
        } else {
          window.location.href = "/signin"
        }     
      })
      .addCase(confirmAccessCode.rejected, (state, action) => {
        state.loading = false;
        state.confirmAccessCodeError = action.payload as string;
      });
  },
});
export const {clearErrorRegisterUser, clearAccessCodeError} = userSlice.actions;
export default userSlice.reducer;
