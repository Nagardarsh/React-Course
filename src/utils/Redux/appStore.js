import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //reducer modify appstore
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
