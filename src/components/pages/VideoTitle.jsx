import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[11%] px-25 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <p className="text-lg w-2/4 mt-3">{overview}</p>
      <div className="mt-5">
        <button className="bg-white text-black px-10 py-3 rounded-md hover:bg-white/90 transition-colors mr-5">
          <span className="flex items-center justify-center gap-4 text-md">
            <FaPlay /> Play
          </span>
        </button>
        <button className="bg-gray-600 opacity-75 text-white px-10 py-3 rounded-md hover:bg-gray-600 transition-colors">
          <span className="flex items-center justify-center gap-4 text-md">
            <GoInfo /> More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
