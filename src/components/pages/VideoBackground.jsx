import { useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";

const VideoBackground = ({ videoId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo?.key);
  useTrailerVideo(videoId);
  return (
    <div className="w-screen">
      <div className="w-screen aspect-video">
        <iframe
          className="w-screen aspect-video object-cover"
          src={`https://www.youtube.com/embed/${trailerVideo}/?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
