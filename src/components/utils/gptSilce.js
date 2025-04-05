import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSwitch: false,
    movieResults: null,
    movieTitles: null,
  },
  reducers: {
    toggleGPT: (state) => {
      state.toggleSwitch = !state.toggleSwitch;
    },

    geminiMovieResults: (state, action) => {
      const { movieTitle, movies } = action.payload;
      state.movieResults = movies;
      state.movieTitles = movieTitle;
    },

    clearGPTMovieResults: (state) => {
      state.movieResults = null;
      state.movieTitles = null;
    },
  },
});

export const { toggleGPT, geminiMovieResults, clearGPTMovieResults } =
  gptSlice.actions;

export default gptSlice.reducer;
