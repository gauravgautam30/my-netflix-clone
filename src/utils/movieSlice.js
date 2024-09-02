import { createSlice } from "@reduxjs/toolkit";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    trailerVideo: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideos } = moviesSlice.actions;

export default moviesSlice.reducer;
