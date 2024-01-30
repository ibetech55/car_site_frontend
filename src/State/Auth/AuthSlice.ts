import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./AuthState";
import { authLogin } from "./AuthActions";
import { LoginResponseDto } from "../../Data/AuthDtos/loginDtos";
import Cookies from 'js-cookie';

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      checkAuth: (state) => {
        if(Cookies.get('login_token')) {
          state.auth = true;
          state.loginToken = Cookies.get('login_token') as string;
        }
      },
    },
    extraReducers(builder) {
        builder.addCase(authLogin.pending, (state)=>{
            state.loading = true;
        })
        .addCase(
            authLogin.fulfilled,
            (state, action: PayloadAction<LoginResponseDto>) => {
              const expires = new Date();
              expires.setTime(expires.getTime() * 1000 * 60 * 60 * 1);
              state.auth = true;
              state.loginToken = action.payload.login_token;
              state.loading = false
              // window.location.href = "/"
            }
          )
    },
})
export const { checkAuth } = authSlice.actions;
export default authSlice.reducer;