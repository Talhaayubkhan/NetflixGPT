// import React from "react";
// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";

// const GPTMoviesSuggestions = () => {
//   const { movieTitles, movieResults } = useSelector((store) => store?.gpt);
//   if (!movieTitles) return;
//   return (
//     <>
//       <div className="p-4 m-4 bg-black text-white opacity-85">
//         {movieTitles.map((movieName, index) => (
//           <MovieList
//             key={movieName}
//             title={movieName}
//             movies={movieResults[index]}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default GPTMoviesSuggestions;
// GPTMoviesSuggestions.jsx
import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesSuggestions = () => {
  const { movieTitles, movieResults } = useSelector((store) => store?.gpt);

  if (!movieTitles) return null;

  return (
    <div className="p-2 mx-2 mt-4 bg-black text-white bg-opacity-85 rounded sm:p-3 sm:mx-3 md:p-4 md:mx-4 lg:mx-6">
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
