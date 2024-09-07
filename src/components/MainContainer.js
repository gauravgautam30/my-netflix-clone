import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
// import SecondaryContainer from "./SecondaryContainer";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const movie = movies[0];
  if (!movie) return;
 
  const { original_title, overview, id } = movie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
