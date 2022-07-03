
import { createSlice } from "@reduxjs/toolkit";
// register 
const initialState = {
   
    //local storage
    registerData:
    localStorage.getItem("registerData")
        ? JSON.parse(localStorage.getItem("registerData"))
        : {
        name: "",
        username: "",
        email: "",
        phone : "",
        password: "",
        
       
        }
    ,
    isLoggedIn: localStorage.getItem("isLoggedIn")
        ? JSON.parse(localStorage.getItem("isLoggedIn"))
        : false,

    //local storage
    
};
const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setRegister: (state, action) => {
            state.registerData = action.payload;
            localStorage.setItem("registerData", JSON.stringify(state.registerData));
        },
        login : (state) => {
            state.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
        
          },
          updateUser: (state, action) => {
            state.registerData = action.payload;
            localStorage.setItem("registerData", JSON.stringify(state.registerData));
        
          },
          updatePassword: (state, action) => {
            state.registerData.password = action.payload;
            localStorage.setItem("registerData", JSON.stringify(state.registerData));
        
          },
          logout: (state) => {
            state.isLoggedIn = false;
            // remove
            localStorage.removeItem("registerData");
            localStorage.removeItem("isLoggedIn");
          },
         

    }
});
export const { setRegister, login, updateUser, updatePassword,logout } = registerSlice.actions;
export default registerSlice.reducer;

