import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    registerData
        : localStorage.getItem("registerData")
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

    loginData:
    localStorage.getItem("loginData")
        ? JSON.parse(localStorage.getItem("loginData"))
        : {
            user: null
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
        }
    }
});
export const { setRegister } = registerSlice.actions;
export default registerSlice.reducer;


