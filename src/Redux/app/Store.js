import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import productReducer from "../features/Product/ProductSlice";
import CartReducer from "../features/Card/cardslice";

export const store = configureStore({
  reducer: {
    authReducer,
    productReducer,
    CartReducer,
  
    
  },
});
