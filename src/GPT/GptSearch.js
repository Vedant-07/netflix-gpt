import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchbar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        
        <img src={BG_URL} alt="logo" className="object-cover w-screen h-screen" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GptSearch;