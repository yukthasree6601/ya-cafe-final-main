import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

// Create and configure the store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
