import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    name: "Jane Doe",
    username: "janedoe18",
    address:
      "Jl. Surya Sumantri No. 56, Kec. Sukajadi, Pasteur, Kota Bandung, jawa Barat, 40161",
    email: "janedoe18@gmail.com",
    phone: "0811234566790",
    password: "janedoespassword",
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
    updatePassword: (state, action) => {
      state.userData.password = action.payload;
    }
  },
});

export const { updateUser, updatePassword } = userSlice.actions;
export default userSlice.reducer;
