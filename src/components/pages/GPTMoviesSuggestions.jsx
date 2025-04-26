import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesSuggestions = () => {
  const { movieTitles, movieResults } = useSelector((store) => store?.gpt);

  if (!movieTitles) return null;

  return (
    <div className="p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 md:mx-6 mt-6 bg-black/70 backdrop-blur-md text-white rounded-2xl shadow-2xl animate-fade-in">
      {movieTitles.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMoviesSuggestions;
