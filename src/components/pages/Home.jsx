const Home = () => {
  return (
    <div className="relative">
      {/* Background Image with gradient overlay */}
      <div className="absolute w-full h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      {/* Header with improved spacing and hover effects */}
      <div className="px-8 py-4 absolute w-full z-10 bg-gradient-to-b from-black to-transparent">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <img
            className="w-48 transition-transform hover:scale-105"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix logo"
          />

          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-all duration-300 font-semibold">
              Sign In
            </button>
            <button className="bg-transparent hover:bg-red-600 text-white border-2 border-red-600 px-6 py-2 rounded-md transition-all duration-300 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content with improved typography and animation */}
      <div className="absolute w-full h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl mb-8 text-gray-200">
            Watch anywhere. Cancel anytime.
          </p>
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-4 w-96 bg-black bg-opacity-60 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-600 transition-all"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl rounded-md transition-all duration-300 flex items-center gap-2 font-semibold">
                Get Started
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
