import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./userAuthSlice";
import userFeedReducer from "./userFeed";
const appStore = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    userFeed: userFeedReducer,
  },
});

export default appStore;
