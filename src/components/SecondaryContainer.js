import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black w-full h-full pb-24 ">
         <div className="pl-12  z-30 relative -mt-44"> 
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          </div>
      </div>
    )
  );
};
export default SecondaryContainer;
