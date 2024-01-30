import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./AuthState";
import { authLogin } from "./AuthActions";
import { LoginResponseDto } from "../../Data/AuthDtos/loginDtos";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
          state.loading = false;
          window.location.href = "/";
        }
      );
  },
});
export default authSlice.reducer;
