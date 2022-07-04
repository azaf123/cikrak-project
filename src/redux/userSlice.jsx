import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // slice for already existing user (dummy)
  userData: {
    name: 'Jane Doe',
    username: 'janedoe18',
    address:
      'Jl. Surya Sumantri No. 56, Kec. Sukajadi, Pasteur, Kota Bandung, Jawa Barat, 40161',
    email: 'janedoe18@gmail.com',
    phone: '0811234566790',
    password: 'test',
    avatar:
      'https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?t=st=1655398402~exp=1655399002~hmac=49552dd513a59881bd94e6dde197a76ecb808ce13543285ec2d1c9f4cd2d698c&w=740',
    points: 9080,
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload;
    },
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
    updatePassword: (state, action) => {
      state.userData.password = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, updateUser, updatePassword, login, logout } =
  userSlice.actions;
export default userSlice.reducer;
