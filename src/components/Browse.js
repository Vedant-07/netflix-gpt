import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "../GPT/GptSearch";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies();
  useTopRatedMovies()
  useUpcomingMovies()
  return <>
  <Header/>
  <div className="h-screen overflow-x-hidden ">
  {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
   </div>
  </>
};

export default Browse;
//overflow-x-hidden flex flex-col h-screen