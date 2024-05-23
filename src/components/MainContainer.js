import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length===0){
    return;
  } 

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
       <VideoBackground movieId={id} /> 
      </div>
    </div>
  );
};
export default MainContainer;