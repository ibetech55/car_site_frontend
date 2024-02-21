import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./AuthState";
import { authLogin, authLogout } from "./AuthActions";
import { LoginResponseDto } from "../../Data/AuthDtos/loginDtos";
import cookie from "js-cookie";
import { LOGIN_TOKEN } from "../../Configs/Constants/Tokens";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearLoginError: (state) => {
      state.loginError = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        authLogin.fulfilled,
        (state, action: PayloadAction<LoginResponseDto>) => {
          state.auth = true;
          state.loginToken = action.payload.login_token;
          cookie.set(LOGIN_TOKEN, action.payload.login_token)
          state.loading = false;
        }
      )
      .addCase(authLogin.rejected, (state, action) => {
        state.loginError = action.payload as string;
      })
      .addCase(authLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.auth = false;
        cookie.remove(LOGIN_TOKEN);
        cookie.remove("auth_token");
        state.loading = false;
        window.location.href = "/"
      })
      .addCase(authLogout.rejected, (state, action) => {
        state.loginError = action.payload as string;
      });
  },
});

export const { clearLoginError } = authSlice.actions;
export default authSlice.reducer;
