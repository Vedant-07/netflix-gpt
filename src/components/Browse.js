import React from "react";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  //console.log("in browse page");
  useNowPlayingMovies()
  //usePopularMovies();
  return <>
  <Header/>
  <div className="h-screen overflow-x-hidden ">
   
     <MainContainer/>
     
      
   <SecondaryContainer/>  
   
   </div>
  </>
};

export default Browse;
//overflow-x-hidden flex flex-col h-screen