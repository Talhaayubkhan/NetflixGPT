// import React from "react";
// import { IMG_URL } from "../utils/constants";

// const MovieCard = ({ posterPath }) => {
//   if (!posterPath) return;

//   return (
//     <>
//       <div className="w-48 cursor-pointer">
//         <img
//           src={`${IMG_URL}${posterPath}`}
//           alt="movie_poster"
//           className="rounded-lg"
//         />
//       </div>
//     </>
//   );
// };

// export default MovieCard;

// MovieCard.jsx
// import { IMG_URL } from "../utils/constants";

// const MovieCard = ({ posterPath }) => {
//   if (!posterPath) return null;

//   return (
//     <div className="w-24 sm:w-28 md:w-36 lg:w-40 xl:w-48 flex-shrink-0 transition-transform hover:scale-105 duration-300 cursor-pointer">
//       <img
//         src={`${IMG_URL}${posterPath}`}
//         alt="movie_poster"
//         className="rounded-lg w-full"
//         loading="lazy"
//       />
//     </div>
//   );
// };

// export default MovieCard;

// below is updated with responsiveness
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath, onClick }) => {
  if (!posterPath) return null;

  return (
    <div
      className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-48 flex-shrink-0 transition-transform hover:scale-105 duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={`${IMG_URL}${posterPath}`}
        alt="movie_poster"
        className="rounded-lg w-full"
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
