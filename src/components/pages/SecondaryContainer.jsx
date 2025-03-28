import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;

  return (
    <div className="py-5">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Horror"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
