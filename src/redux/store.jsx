import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
import userTestReducer from "./usertestSlice";
import registerReducer from "./registerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    userTest: userTestReducer,
    register: registerReducer,
   

  },
});

export default store;
