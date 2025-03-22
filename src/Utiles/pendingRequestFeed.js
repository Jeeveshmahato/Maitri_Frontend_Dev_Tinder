import { createSlice } from "@reduxjs/toolkit";

const pendingRequestSlice = createSlice({
  name: "pendingRequests",
  initialState: {
    pendingRequests: null,
  },
  reducers: {
    addPendingRequests: (state, action) => {
      state.pendingRequests = action.payload;
    },
    removePendingRequests: (state) => {
      state.pendingRequests = null;
    },
  },
});
export const { addPendingRequests, removePendingRequests } =
  pendingRequestSlice.actions;

export default pendingRequestSlice.reducer;
