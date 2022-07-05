import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import registerReducer from "./registerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
  },
});

export default store;
