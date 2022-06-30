import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loginData: {
    username: "janedoe18",
    password: "janedoespassword",
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    authorize: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { authorize, logout } = loginSlice.actions;
export default loginSlice.reducer;
