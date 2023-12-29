import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "../utils/auth";

const initialState = {
  isLoggedIn: Boolean(getAccessToken()),
  accessToken: getAccessToken(),
  redirectPath: "/",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRedirectPath: (state, action) => {
      state.redirectPath = action.payload;
    },
    setAuth: (state, action) => {
      state = action.payload;
    },
    resetAuth: (state) => {
      state = initialState;
    },
  },
});

export const {
  setLoggedIn,
  setAccessToken,
  setRedirectPath,
  setAuth,
  resetAuth,
} = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectRedirectPath = (state: any) => state.auth.redirectPath;

export default authSlice;
