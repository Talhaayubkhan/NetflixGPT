// import { useSelector } from "react-redux";
// import { useTrailerVideo } from "../hooks/useTrailerVideo";

// const VideoBackground = ({ videoId }) => {
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo?.key);
//   useTrailerVideo(videoId);
//   return (
//     <div className="w-screen h-screen">
//       <iframe
//         className="aspect-video w-full h-full object-cover"
//         src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1`}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;

// VideoBackground.jsx - Assuming you need to update this as well
// import React from "react";
// import { useSelector } from "react-redux";
// import { useTrailerVideo } from "../hooks/useTrailerVideo";

// const VideoBackground = ({ videoId }) => {
//   // Since you didn't provide the full implementation,
//   // I'll include a basic structure with responsive classes
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo?.key);
//   useTrailerVideo(videoId);
//   return (
//     <div className="w-full aspect-video overflow-hidden">
//       {/* Assuming this is a YouTube or similar embed */}
//       <iframe
//         className="w-full aspect-video"
//         src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1`}
//         title="Video Background"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;

// below is updated with responsiveness
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
