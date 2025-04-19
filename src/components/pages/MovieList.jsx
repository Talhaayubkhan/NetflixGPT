// import MovieCard from "./MovieCard";

// const MovieList = ({ movies, title }) => {
//   if (!movies) return null;

//   return (
//     <div className="px-1 sm:px-2 mb-4 sm:mb-6">
//       <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4 lg:py-5 font-bold text-white">
//         {title}
//       </h1>
//       <div className="overflow-x-auto no-scrollbar">
//         <div className="flex gap-2 sm:gap-3 md:gap-6 lg:gap-8 xl:gap-10">
//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;

// below is updated with responsiveness
import { useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

const MovieList = ({ movies, title }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo?.key);
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (!movies) return null;

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="px-1 sm:px-2 mb-2 sm:mb-4 md:mb-6">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4 font-bold text-white">
        {title}
      </h1>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 pb-2">
          {movies?.map((movie) => {
            console.log(movie);
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
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 w-[75%] max-w-2xl text-black relative">
            <button
              className="absolute top-4 right-2 text-black text-lg font-bold"
              onClick={closePopup}
            >
              <IoClose className="text-4xl" />
            </button>
            <h2 className="text-4xl font-bold mb-2">
              {selectedMovie.title || ""}
            </h2>
            <p className="mb-4">{selectedMovie.overview}</p>
            <p className="mb-4">{selectedMovie.release_date}</p>
            <p className="mb-4">{selectedMovie.adults}</p>
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
              title="Video Background"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
