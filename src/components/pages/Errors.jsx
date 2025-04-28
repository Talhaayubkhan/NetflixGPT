import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12 text-white">
      <div className="max-w-lg w-full text-center">
        {/* Netflix-style error presentation */}
        <div className="mb-8">
          <div className="text-red-600 text-8xl font-bold mb-6">404</div>
          <h1 className="text-3xl font-medium mb-4">Lost your way?</h1>
          <p className="text-gray-400 text-lg mb-2">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <p className="text-gray-500 text-sm">Error Code: NSES-404</p>
        </div>

        {/* Action buttons - Netflix style */}
        <div className="flex flex-col gap-4 mb-12">
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded"
          >
            Netflix Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium py-3 px-6 rounded transition-colors duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Help options */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-3">Need more help?</p>
          <Link
            to="/help"
            className="text-gray-300 hover:text-white underline text-sm"
          >
            Visit the Netflix Help Center
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
