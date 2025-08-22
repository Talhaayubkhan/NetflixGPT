import { useState } from "react";
import MovieCard from "./MovieCard";
import { IoClose } from "react-icons/io5";
import { API_OPTIONS, fetchCurrentMovieId } from "../utils/constants";
import { FaTrash } from "react-icons/fa";

const MovieList = ({ movies, title }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  if (!movies) return null;

  const handleMovieClick = async (movie) => {
    try {
      const apiUrl = fetchCurrentMovieId(movie.id);
      const response = await fetch(apiUrl, API_OPTIONS);
      const data = await response.json();

      // The find() method in JavaScript is used on arrays to efficiently locate the first element that satisfies a specified condition
      // Unlike filter(), which returns a new array containing all matching elements, find()
      // becuse we find directly the trailer only! we use find here!
      const trailer =
        data?.results?.find((video) => video.type === "Trailer") ||
        data.results[0];
      setSelectedMovie(movie);
      setTrailerKey(trailer?.key);
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const closePopup = () => {
    setSelectedMovie(null);
    setTrailerKey(null);
  };

  return (
    <div className="px-1 sm:px-2 mb-2 sm:mb-4 md:mb-6">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4 font-bold text-white">
        {title}
      </h1>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 pb-2">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                onClick={() => handleMovieClick(movie)}
              />
            );
          })}
        </div>
      </div>

      {selectedMovie && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl relative animate-fadeIn">
            <button
              onClick={closePopup}
              className="absolute top-6 right-4 text-gray-700 hover:text-black transition duration-200 cursor-pointer"
            >
              <IoClose className="text-5xl" />
            </button>

            <div className="p-6 sm:p-8 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {selectedMovie?.title || "No Title Availble Now"}
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {selectedMovie?.overview || "No Description Available"}
              </p>

              <p className="text-gray-600 font-medium text-sm sm:text-base">
                📅 {selectedMovie?.release_date} |{" "}
                {selectedMovie?.adult ? "🔞 18+" : "👨‍👩‍👧 All Ages"}
              </p>

              {trailerKey ? (
                <div className="mt-4">
                  <iframe
                    className="w-full rounded-xl aspect-video"
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=1`}
                    title="Movie Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-red-500 font-semibold text-lg mt-6">
                  <FaTrash className="text-3xl" />
                  <span>Trailer not available</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
