import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesSuggestions = () => {
  const { movieTitles, movieResults } = useSelector((store) => store?.gpt);
  if (!movieTitles) return;
  return (
    <>
      <div className="p-4 m-4 bg-black text-white opacity-85">
        {movieTitles.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </>
  );
};

export default GPTMoviesSuggestions;
