// import React from "react";
// import VideoBackground from "./VideoBackground";
// import VideoTitle from "./VideoTitle";
// import { useSelector } from "react-redux";

// const MainContainer = () => {
//   const videos = useSelector((store) => store.movies?.nowPlayingMovies);
//   if (!videos) return null;
//   // console.log(videos);

//   const { original_title, overview, id } = videos[0];

//   return (
//     <div>
//       <VideoTitle title={original_title} overview={overview} />
//       <VideoBackground videoId={id} />
//     </div>
//   );
// };

// export default MainContainer;

// MainContainer.jsx
import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const videos = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!videos) return null;

  const { original_title, overview, id } = videos[0];

  return (
    <div className="relative w-full">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
