import { createSlice } from "@reduxjs/toolkit";

const userFeedSlice = createSlice({
  name: "userFeed",
  initialState: {
    userFeed: null,
  },
  reducers: {
    addUserFeed: (state, action) => {
      state.userFeed = action.payload;
    },
    removeUserFeed: (state) => {
      state.userFeed = null;
    },
  },
});

export const { addUserFeed, removeUserFeed } = userFeedSlice.actions;

export default userFeedSlice.reducer;
