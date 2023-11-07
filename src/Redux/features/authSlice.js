import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: JSON.parse(localStorage.getItem("user"))||{},
  token: JSON.parse(localStorage.getItem("token"))||"",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.user = payload.data;
      localStorage.setItem("user", JSON.stringify(payload.data));
      localStorage.setItem("token", JSON.stringify(payload.token));
      state.token= payload.token
    },
    logout: (state) => {
      state.user = {};
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { login,logout } = authSlice.actions;
