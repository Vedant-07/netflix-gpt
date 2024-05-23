import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black w-full min-h-screen pb-24 ">
         <div className="pl-12  z-30 relative -mt-44 "> 
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          </div>
      </div>
    )
  );
};
export default SecondaryContainer;
