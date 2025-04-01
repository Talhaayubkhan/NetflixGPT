import { FaSearch } from "react-icons/fa";
const InputSearchGPT = () => {
  return (
    <div className="pt-[10%] px-4 md:px-6 lg:px-8 min-h-[50vh] flex flex-col items-center">
      <form className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 p-6 bg-black/80 rounded-lg shadow-2xl border border-gray-700">
          <input
            type="text"
            placeholder="What would you like to watch today?"
            className="flex-grow px-5 py-4 bg-black text-white rounded-md border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all duration-200 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-white hover:bg-red-700 text-black font-medium px-6 py-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span className="font-bold text-xl">Search</span>
            <FaSearch className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSearchGPT;
