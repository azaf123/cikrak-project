
import { createSlice } from "@reduxjs/toolkit";
// register 
const initialState = {
    isLoggedIn: false,
    //local storage

    registerData:
    localStorage.getItem("registerData")
        ? JSON.parse(localStorage.getItem("registerData"))
        : {
            username: "",
        email: "",
        phone : "",
        password: "",
        confirmPassword: "",
        }
    ,
    //local storage
    
}
const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setRegister: (state, action) => {
            state.registerData = action.payload;
            localStorage.setItem("registerData", JSON.stringify(state.registerData));
        },
        login: (state) => {
            state.isLoggedIn = true;
          },

    }
});
export const { setRegister, login } = registerSlice.actions;
export default registerSlice.reducer;

