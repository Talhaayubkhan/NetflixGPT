// import { useNavigate } from "react-router-dom";
// import {
//   NETFLIX_HOME_BACKGROUND_IMG,
//   NETFLIX_LOGO_URL,
// } from "../utils/constants";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="relative">
//       {/* Background Image with gradient overlay */}
//       <div className="absolute w-full h-screen">
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
//         <img
//           className="w-full h-full object-cover"
//           src={NETFLIX_HOME_BACKGROUND_IMG}
//           alt="background"
//         />
//       </div>

//       {/* Header with improved spacing and hover effects */}
//       <div className="px-8 py-4 absolute w-full z-10 bg-gradient-to-b from-black to-transparent">
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//           <img
//             className="w-48 transition-transform hover:scale-105"
//             src={NETFLIX_LOGO_URL}
//             alt="netflix logo"
//           />

//           <div className="flex gap-4">
//             <button
//               className="bg-red-600 text-white px-6 py-2 rounded-lg cursor-pointer font-bold"
//               onClick={handleSignIn}
//             >
//               Login In
//             </button>
//             <button className="bg-transparent hover:bg-red-600 text-white border-2 border-red-600 px-6 py-2 rounded-md transition-all duration-300 font-semibold">
//               Join Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Hero Content with improved typography and animation */}
//       <div className="absolute w-full h-screen flex items-center justify-center">
//         <div className="text-center text-white max-w-3xl px-4">
//           <h1 className="text-6xl font-bold mb-6 animate-fade-in">
//             Unlimited movies, TV shows, and more
//           </h1>
//           <p className="text-2xl mb-8 text-gray-200">
//             Watch anywhere. Cancel anytime.
//           </p>
//           <div className="space-y-6">
//             <p className="text-xl text-gray-300">
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </p>
//             <div className="flex gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="px-4 py-4 w-96 bg-black bg-opacity-60 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-600 transition-all"
//               />
//               <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl rounded-md transition-all duration-300 flex items-center gap-2 font-semibold">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useNavigate } from "react-router-dom";
import {
  NETFLIX_HOME_BACKGROUND_IMG,
  NETFLIX_LOGO_URL,
} from "../utils/constants";

const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleGetStarted = () => {
    navigate("/browse");
  };

  return (
    <div className="relative">
      {/* Background Image with gradient overlay */}
      <div className="absolute w-full h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
        <img
          className="w-full h-full object-cover"
          src={NETFLIX_HOME_BACKGROUND_IMG}
          alt="background"
        />
      </div>

      {/* Header with improved spacing and hover effects */}
      <div className="px-4 sm:px-8 py-4 absolute w-full z-10 bg-gradient-to-b from-black to-transparent">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <img
            className="w-24 sm:w-32 md:w-48 transition-transform hover:scale-105"
            src={NETFLIX_LOGO_URL}
            alt="netflix logo"
          />

          <div className="flex gap-2 sm:gap-4">
            <button
              className="bg-red-600 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-lg cursor-pointer font-bold text-sm sm:text-base"
              onClick={handleSignIn}
            >
              Login In
            </button>
            <button className="bg-transparent hover:bg-red-600 text-white border-2 border-red-600 px-3 sm:px-6 py-1 sm:py-2 rounded-md transition-all duration-300 font-semibold text-sm sm:text-base">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content with improved typography and animation */}
      <div className="absolute w-full h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg font-bold sm:text-xl md:text-2xl mb-4 sm:mb-8 text-gray-200">
            Watch anywhere. Cancel anytime.
          </p>
          <div className="space-y-4 sm:space-y-6 font-bold">
            <p className="text-md sm:text-lg md:text-xl text-gray-300">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-3 sm:px-4 py-3 sm:py-4 w-full sm:w-64 md:w-96 bg-black bg-opacity-60 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-600 transition-all"
              />
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-xl rounded-md transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
