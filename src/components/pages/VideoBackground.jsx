import React from "react";
import { useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";

const VideoBackground = ({ videoId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo?.key);
  useTrailerVideo(videoId);

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
        title="Video Background"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
