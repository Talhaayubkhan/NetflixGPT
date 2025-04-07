// import { FaPlay } from "react-icons/fa";
// import { GoInfo } from "react-icons/go";
// const VideoTitle = ({ title, overview }) => {
//   // const currentLang = useSelector((store) => store?.lang?.currentLang);

//   return (
//     <div className="w-screen aspect-video pt-[11%] px-25 absolute text-white bg-gradient-to-r from-black">
//       <h1 className="text-5xl font-semibold">{title}</h1>
//       <p className="text-lg w-2/4 mt-3">{overview}</p>
//       <div className="mt-5">
//         <button className="bg-white text-black px-10 py-3 rounded-md hover:bg-white/90 transition-colors mr-5">
//           <span className="flex items-center justify-center gap-4 text-md">
//             <FaPlay /> Play
//           </span>
//         </button>
//         <button className="bg-gray-600 opacity-75 text-white px-10 py-3 rounded-md hover:bg-gray-600 transition-colors">
//           <span className="flex items-center justify-center gap-4 text-md">
//             <GoInfo /> More Info
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;

// VideoTitle.jsx
// import { FaPlay } from "react-icons/fa";
// import { GoInfo } from "react-icons/go";

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="w-full aspect-video absolute text-white bg-gradient-to-r from-black">
//       <div className="p-4 sm:p-6 md:p-8 lg:px-15 pt-[15%] sm:pt-[13%] md:pt-[10%] lg:pt-[15%] max-w-screen-lg">
//         <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-6xl font-bold line-clamp-2">
//           {title}
//         </h1>
//         <p className="text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-3/4 md:w-2/2 lg:w-2/2 mt-1 sm:mt-2 md:mt-2 line-clamp-3 md:line-clamp-8">
//           {overview}
//         </p>
//         <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
//           <button className="bg-white text-black px-3 py-1 sm:px-5 sm:py-2 md:px-7 md:py-2 lg:px-10 lg:py-3 rounded-md hover:bg-white/90 transition-colors text-xs sm:text-sm md:text-md">
//             <span className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
//               <FaPlay /> Play
//             </span>
//           </button>
//           <button className="bg-gray-600 bg-opacity-75 text-white px-3 py-1 sm:px-5 sm:py-2 md:px-7 md:py-2 lg:px-10 lg:py-3 rounded-md hover:bg-gray-600/60 transition-colors text-xs sm:text-sm md:text-base">
//             <span className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
//               <GoInfo /> More Info
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;

// below is updated with responsiveness
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute text-white bg-gradient-to-r from-black">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 pt-[25%] sm:pt-[17%] md:pt-[14%] lg:pt-[15%] max-w-screen-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold line-clamp-1 sm:line-clamp-2">
          {title}
        </h1>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mt-1 xs:mt-20 sm:mt-2 md:mt-3 line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
          {overview}
        </p>
        <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          <button className="bg-white text-black px-3 py-1 sm:px-5 sm:py-2 md:px-7 md:py-2 lg:px-10 lg:py-3 rounded-md hover:bg-white/90 transition-colors text-sm sm:text-sm md:text-base">
            <span className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
              <FaPlay /> Play
            </span>
          </button>
          <button className="bg-gray-600 bg-opacity-75 text-white px-3 py-1 sm:px-5 sm:py-2 md:px-7 md:py-2 lg:px-10 lg:py-3 rounded-md hover:bg-gray-600/60 transition-colors text-sm sm:text-sm md:text-base">
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
