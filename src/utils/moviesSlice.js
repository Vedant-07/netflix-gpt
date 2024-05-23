import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    topRatedMovies:null,
    upcomingMovies:null
  },
  //reducers here are pure functions.provide immutability not touching the datta
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;