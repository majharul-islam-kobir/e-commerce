import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice"; // সঠিক ইমপোর্ট
import cartReducer from "../features/cart/cartSlice"; // সঠিক ইমপোর্ট

const store = configureStore({
  reducer: {
    product: productReducer, // প্রোডাক্ট স্লাইস
    cart: cartReducer, // কার্ট স্লাইস
  },
});

export default store;
