import { FaSearch, FaTrash } from "react-icons/fa";
import { langConst } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { clearGPTMovieResults } from "../utils/gptSilce";

const InputSearchGPT = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store?.lang?.currentLang);
  const { currentSearchInput, searchMovies, isLoading } = useMovieSearch();

  const handleClearMovieResults = () => {
    dispatch(clearGPTMovieResults());
  };

  return (
    <div className="relative flex justify-center p-4 sm:p-6 md:p-8">
      <form
        className="w-full flex flex-col sm:flex-row gap-3 p-4 bg-gray-900 rounded-2xl shadow-2xl max-w-5xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-1">
          <input
            ref={currentSearchInput}
            type="text"
            placeholder={langConst[currentLang]?.gptSearchPlaceHolder}
            className="flex-1 px-4 py-3 bg-white text-black rounded-l-lg text-base focus:outline-none focus:ring-2 focus:ring-red-500 md:text-lg transition-all duration-300"
          />
          <button
            type="submit"
            onClick={searchMovies}
            className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold px-5 py-3 rounded-r-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <FaSearch />
            <span className="hidden sm:inline">
              {langConst[currentLang]?.search}
            </span>
          </button>
        </div>
        <button
          type="button"
          onClick={handleClearMovieResults}
          className="w-full sm:w-auto bg-gray-700 hover:bg-gray-800 active:scale-95 text-white font-semibold px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
        >
          <FaTrash />
          <span className="text-sm md:text-base">
            {langConst[currentLang]?.clear}
          </span>
        </button>
      </form>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center mt-60">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default InputSearchGPT;
