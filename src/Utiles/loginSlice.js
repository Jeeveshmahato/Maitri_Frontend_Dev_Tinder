import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "Login",
  initialState: {
    loginDetails: null,
  },
  reducers: {
    addLoginDetails: (state, action) => {
      state.loginDetails = action.payload;
    },
  },
});
export const {addLoginDetails} = loginSlice.actions;
export default loginSlice.reducer;
