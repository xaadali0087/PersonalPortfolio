import { createSlice } from "@reduxjs/toolkit";

export type userState = {
  accessToken: string | null;
  user: string | null;
  setting: string | null;
  email: string | null;
  resetPassword: string | null;
};

const initialState: userState = {
  accessToken: null,
  user: null,
  setting: null,
  email: null,
  resetPassword: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => initialState,

    saveAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },

  },
});

export const {
  saveAccessToken,
  resetUserState,

} = userSlice.actions;

export default userSlice.reducer;
