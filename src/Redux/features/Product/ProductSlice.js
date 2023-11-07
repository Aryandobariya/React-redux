import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  product: [],
  err: "",
};

export const fetchData = createAsyncThunk("product/fetchData", () => {
  return axios.get("http://localhost:9999/product/getAll").then((resData) => {
    return resData?.data; // Add a return statement here
  });
});
export const deleteproduct = createAsyncThunk(
  "product/deleteproduct",
  ({ id, index }) => {
    // console.log("🚀 ~ file: ProductSlice.js:16 ~ deleteproduct ~ id:", id)
    // console.log("🚀 ~ file: ProductSlice.js:16 ~ deleteproduct ~ index:", index)
    return axios
      .delete(`http://localhost:9999/product/delete/${id}`)
      .then((resData) => {
        return index;
      });
  }
);

export const addproduct = createAsyncThunk("product/addproduct", (data) => {
  return axios
    .post("http://localhost:9999/product/create", data, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((resData) => {
      // console.log("🚀 ~ file: ProductSlice.js:25 ~ .then ~ resData:", resData);
      return resData?.data; // Add a return statement here
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: ProductSlice.js:21 ~ returnaxios.post ~ err:",
        err.message
      );
    });
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {},
    // update: (state, { payload }) => {
    //   if (payload && payload.data && typeof payload.index === 'number') {
    //     state.product.splice(payload.index, 1, payload.data);
    //   } else {
    //     // Handle the error, log, or perform necessary actions if payload is not as expected
    //     console.error('Invalid payload received for update action');
    //     // You might set an error state or handle this situation as needed.
    //   }
    // },

    update: (state, { payload }) => {
      console.log("🚀 ~ file: ProductSlice.js:54 ~ payload:", payload);
      state.product.splice(payload.index, 1, payload.Data);
    },
    topFiveData: (state) => {
      console.log("🚀 ~ file: ProductSlice.js:51 ~ state:", state.topFiveData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.product = payload?.data;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.err = "Data not found...";
        toast.error("Data not found...");
      })
      .addCase(addproduct.fulfilled, (state, { payload }) => {
        console.log(
          "🚀 ~ file: ProductSlice.js:52 ~ .addCase ~ payload:",
          payload
        );
        state.product.unshift(payload.data);
        toast.success("Data not success ..");
      })
      .addCase(deleteproduct.fulfilled, (state, { payload }) => {
        state.product = state.product.filter((e, i) => i !== payload);
      });
  },
});

export default productSlice.reducer;

export const { add, update, topFiveData } = productSlice.actions;
