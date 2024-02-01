import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./UserState";
import { createDealership, createPrivateUser } from "./UserActions";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createPrivateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPrivateUser.fulfilled, (state) => {
        state.loading = false;
        state.error = { registerUser: "" };
        window.location.href = "/activate_account";
      })
      .addCase(createPrivateUser.rejected, (state, action) => {
        state.error.registerUser = action.payload as string;
      })
      .addCase(createDealership.pending, (state) => {
        state.loading = true;
        state.error = { registerUser: "" };
      })
      .addCase(createDealership.fulfilled, (state) => {
        state.loading = false;
        state.error = { registerUser: "" };
        window.location.href = "/activate_account";
      })
      .addCase(createDealership.rejected, (state, action) => {
        state.error.registerUser = action.payload as string;
      });
  },
});
export default userSlice.reducer;
