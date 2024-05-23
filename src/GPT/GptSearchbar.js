import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { run } from "../utils/googleAI";
import { addGptMovieResult } from "../utils/gptSlice";
import lang from "../utils/languageConstants";

// search movie in TMDB
const searchMovieTMDB = async (movie) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error("Failed to fetch movie data from TMDB", error);
    return [];
  }
};

const GptSearchBar = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const handleGPTSearchClick = async () => {
    try {
      setError(null); // Reset error state
      setLoading(true); 
      const search = searchText.current.value;
      if (search.length === 0) {
        setLoading(false);
        throw new Error("No valid movies found. Please try another prompt.");
        //return;
      }

      const gptMovies = await run(search);
      if (!Array.isArray(gptMovies) || gptMovies.length === 0) {
        throw new Error("No valid movies found. Please try another prompt.");
      }
      const uniqueGptMovies = [...new Set(gptMovies)];
      
      // Map movie names to search promises
      const promiseArray = uniqueGptMovies.map((movie) => searchMovieTMDB(movie));

      // Wait for all promises to resolve
      const tmdbResults = await Promise.all(promiseArray);

      if (tmdbResults.flat().length === 0) {
        throw new Error("No movies found on TMDB. Please try another prompt.");
      }

      // Sort based on popularity
      tmdbResults.forEach((tmdb) => {
        tmdb.sort((a, b) => b.popularity - a.popularity);
      });

      dispatch(
        addGptMovieResult({ movieNames: uniqueGptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      //console.error("Error handling GPT search click", error);
      setError(error.message+" . movie list might contain explicit results "); // Set error message to state
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="pt-[10%] flex justify-center rounded-lg">
      <form className="w-4/6 bg-black p-4 rounded-lg opacity-90" onSubmit={(e) => e.preventDefault()}>
        <div className="relative flex items-center rounded-lg ">
          <input
            type="text"
            ref={searchText}
            className="p-4 flex-grow"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="ml-4 py-2 px-4 bg-red-700 text-white rounded-lg "
            onClick={handleGPTSearchClick}
          >
            {lang[langKey].search}
          </button>
        </div>
        {loading && (
          <div className="flex justify-center items-center mt-2 rounded-lg">
            <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}
        {error && (
          <div className="text-red-500 mt-2 bg-black bg-opacity-75 text-center rounded-lg p-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
