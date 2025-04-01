import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSwitch: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.toggleSwitch = !state.toggleSwitch;
    },
  },
});

export const { toggleGPT } = gptSlice.actions;

export default gptSlice.reducer;
