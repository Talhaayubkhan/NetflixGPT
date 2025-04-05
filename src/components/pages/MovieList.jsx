// import React from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ movies, title }) => {
//   return (
//     movies && (
//       <div className="px-2">
//         <h1 className="text-3xl py-5 font-bold text-white">{title}</h1>
//         <div className="flex overflow-y-scroll no-scrollbar">
//           <div className="flex gap-10 justify-center items-center">
//             {movies?.map((movie) => (
//               <MovieCard key={movie.id} posterPath={movie.poster_path} />
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default MovieList;

import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  if (!movies) return null;

  return (
    <div className="px-1 sm:px-2 mb-4 sm:mb-6">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4 lg:py-5 font-bold text-white">
        {title}
      </h1>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 sm:gap-3 md:gap-6 lg:gap-8 xl:gap-10">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
