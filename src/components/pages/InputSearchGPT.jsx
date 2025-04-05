// import { FaSearch, FaTrash } from "react-icons/fa";
// import { langConst } from "../utils/languageConstants";
// import { useDispatch, useSelector } from "react-redux";
// import { useMovieSearch } from "../hooks/useMovieSearch";
// import { clearGPTMovieResults } from "../utils/gptSilce";

// const InputSearchGPT = () => {
//   const dispatch = useDispatch();
//   const currentLang = useSelector((store) => store?.lang?.currentLang);
//   const { currentSearchInput, searchMovies } = useMovieSearch();

//   const handlClearMovieResults = () => {
//     dispatch(clearGPTMovieResults());
//   };

//   return (
//     <div className="pt-[10%] flex justify-center">
//       <form
//         className="w-3/6 flex gap-4 p-4 bg-gray-900 rounded-xl shadow-lg"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           ref={currentSearchInput}
//           type="text"
//           placeholder={langConst[currentLang]?.gptSearchPlaceHolder}
//           className="flex-grow px-6 py-3 bg-white text-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//         <button
//           type="submit"
//           className="bg-red-700 hover:bg-red-800 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
//           onClick={searchMovies}
//         >
//           <span>{langConst[currentLang]?.search}</span>
//           <FaSearch />
//         </button>
//         <button
//           className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
//           onClick={handlClearMovieResults}
//         >
//           <span>{langConst[currentLang]?.clear}</span>

//           <FaTrash />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InputSearchGPT;

// InputSearchGPT.jsx
import { FaSearch, FaTrash } from "react-icons/fa";
import { langConst } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { clearGPTMovieResults } from "../utils/gptSilce";

const InputSearchGPT = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store?.lang?.currentLang);
  const { currentSearchInput, searchMovies } = useMovieSearch();

  const handlClearMovieResults = () => {
    dispatch(clearGPTMovieResults());
  };

  return (
    <div className="flex justify-center px-5 sm:px-6 md:px-8">
      <form
        className="w-full flex flex-col sm:flex-row gap-2 p-3 bg-gray-900 rounded-xl shadow-lg max-w-4xl sm:gap-3 md:gap-4 md:p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={currentSearchInput}
          type="text"
          placeholder={langConst[currentLang]?.gptSearchPlaceHolder}
          className="w-full px-3 py-2 bg-white text-black rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-red-500 md:px-6 md:py-3 md:text-lg"
        />
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <button
            type="submit"
            className="flex-1 sm:flex-none bg-red-700 hover:bg-red-800 text-white font-bold px-3 py-2 rounded-lg flex items-center justify-center gap-1 transition-colors md:px-6 md:py-3"
            onClick={searchMovies}
          >
            <span className="text-sm md:text-base">
              {langConst[currentLang]?.search}
            </span>
            <FaSearch />
          </button>
          <button
            className="flex-1 sm:flex-none bg-gray-700 hover:bg-gray-800 text-white font-bold px-3 py-2 rounded-lg flex items-center justify-center gap-1 transition-colors md:px-6 md:py-3"
            onClick={handlClearMovieResults}
          >
            <span className="text-sm md:text-base">
              {langConst[currentLang]?.clear}
            </span>
            <FaTrash />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSearchGPT;
