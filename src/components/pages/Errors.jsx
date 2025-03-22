import React from "react";
import { useNavigate } from "react-router-dom";

const Errors = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-red-600 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          We're sorry, but we're having trouble processing your request. Please
          try again later.
        </p>

        {/* Action Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all duration-300"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-all duration-300"
          >
            Home Page
          </button>
        </div>

        {/* Error Code */}
        <p className="mt-8 text-gray-500">Error Code: 500</p>
      </div>
    </div>
  );
};

export default Errors;
