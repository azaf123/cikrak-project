import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";

import registerReducer from "./registerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
   

  },
});

export default store;
