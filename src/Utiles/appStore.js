import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
const appStore = configureStore({
  reducer: {
    loginUser: loginReducer,
  },
});

export default appStore;
