import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute text-white bg-gradient-to-r from-black">
      <div className="p-5 sm:p-10 md:p-12 lg:p-12 pt-[25%] sm:pt-[14%] md:pt-[17%] lg:pt-[15%] max-w-screen-lg">
        <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold line-clamp-1 sm:line-clamp-2">
          {title}
        </h1>
        <p className="text-sm sm:text-sm md:text-sm lg:text-lg w-full sm:w-4/5 md:w-2/3 lg:w-2/3 mt-1 xs:mt-20 sm:mt-2 md:mt-3 line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
          {overview}
        </p>
        <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          <button className="bg-white text-black px-4 py-1 sm:px-5 sm:py-2 md:px-7 md:py-2 lg:px-10 lg:py-3 rounded-md hover:bg-white/90 transition-colors text-sm sm:text-sm md:text-base">
            <span className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
              <FaPlay /> Play
            </span>
          </button>
          <button className="bg-gray-600 bg-opacity-75 text-white px-2 py-1 sm:px-5 sm:py-2 md:px-7 md:py-2 lg:px-10 lg:py-3 rounded-md hover:bg-gray-600/60 transition-colors text-sm sm:text-sm md:text-base">
            <span className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
              <GoInfo /> More Info
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
