import React from "react";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
const Browse = () => {
  console.log("in browse page");
  useNowPlayingMovies()
  return <>
  <Header/>
  <MainContainer/>
  </>
};

export default Browse;
