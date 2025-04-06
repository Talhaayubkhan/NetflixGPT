// import React from "react";
// import MovieList from "./MovieList";
// import { useSelector } from "react-redux";

// const SecondaryContainer = () => {
//   const movies = useSelector((store) => store.movies);
//   // console.log(movies);
//   if (!movies) return;

//   return (
//     movies && (
//       <div className="bg-black p-20">
//         <div className="-mt-[20rem] z-20 relative">
//           <MovieList title={"Trending"} movies={movies?.trendingMovies} />
//           <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
//           <MovieList title={"Popular"} movies={movies?.popularMovies} />
//           <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
//           <MovieList title={"UpComming"} movies={movies?.upCommingMovies} />
//         </div>
//       </div>
//     )
//   );
// };

// export default SecondaryContainer;

// SecondaryContainer.jsx
import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return null;

  return (
    movies && (
      <div className="bg-black p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20">
        <div className="-mt-12 sm:-mt-16 md:-mt-20 lg:-mt-[15rem] xl:-mt-[20rem] z-20 relative">
          <MovieList title={"Trending"} movies={movies?.trendingMovies} />
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"UpComming"} movies={movies?.upCommingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
