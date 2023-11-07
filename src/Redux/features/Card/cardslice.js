import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Cart: [],
  count: "",
  pro:[]
};

export const cartData = createAsyncThunk("cart/cartData", () => {
  return axios({
    method: "get",
    url: "http://localhost:9999/cart/getall",
    headers: {
      "Content-Type": "application/json",
      authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  })
    .then((resData) => {
      console.log(
        "🚀>>>>>>>>>>>>>>>>>>>>>>> :",
        resData?.data?.data[0]
      );
      return resData?.data?.data?.[0].products?.[0]

    })
    .catch((err) => {
      console.log("🚀 ~ file: Cartpage.jsx:20 ~ useEffect ~ err:", err);
    });
});

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart: (state, action) => {
      state.Cart.push(action.payload);
    },
    getCart: (state, action) => {
      state.Cart = action.payload; // Replace the existing cart with the new payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cartData.fulfilled, (state, { payload }) => {
      state.pro = payload;
    });
    // console.log("🚀 ~ file: cardslice.js:45 ~ builder.addCase ~ payload:", payload)
  },
});

export default cartslice.reducer;
export const { addcart, getCart } = cartslice.actions;
