import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loginData: {
    user: null
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false


    },
  },
});

export const { authorize, logout } = loginSlice.actions;
export default loginSlice.reducer;
