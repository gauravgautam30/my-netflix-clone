import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
// import YouTubePlayer from "./YoutubePlayer";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-[98.7vw]">
      <iframe
        className="w-[98.7vw] aspect-video h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0&disablekb=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      {/* <YouTubePlayer videoId={trailerVideo.key} /> */}
    </div>
  );
};

export default VideoBackground;
