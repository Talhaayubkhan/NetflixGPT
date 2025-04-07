// import React from "react";
// import InputSearchGPT from "./InputSearchGPT";
// import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
// import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

// const GPTSearch = () => {
//   return (
//     <>
//       <div className="fixed -z-10">
//         <img
//           src={NETFLIX_BACKGROUND_IMG}
//           className="h-screen object-cover md:w-screen"
//           alt="bg_img"
//         />
//       </div>
//       <div className="pt-[35%] md:p-0">
//         <InputSearchGPT />
//         <GPTMoviesSuggestions />
//       </div>
//     </>
//   );
// };

// export default GPTSearch;

// GPTSearch.jsx
import React from "react";
import InputSearchGPT from "./InputSearchGPT";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full h-screen">
        <img
          src={NETFLIX_BACKGROUND_IMG}
          className="h-full w-full object-cover"
          alt="bg_img"
        />
      </div>
      <div className="pt-35 sm:pt-35 md:pt-35 lg:pt-35">
        <InputSearchGPT />
        <GPTMoviesSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
