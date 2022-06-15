import { createSlice } from "@reduxjs/toolkit";
const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    notify(state, action) {
      let message =
        action.payload === ""
          ? ""
          : `${action.payload.message} ${action.payload.content}`;
      return message;
    },
  },
});
export const { notify } = notificationSlice.actions;

export default notificationSlice.reducer;
