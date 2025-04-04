import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    movies && (
      <div className="px-2">
        <h1 className="text-3xl py-5 font-bold text-white">{title}</h1>
        <div className="flex overflow-y-scroll no-scrollbar">
          <div className="flex gap-10 justify-center items-center">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
