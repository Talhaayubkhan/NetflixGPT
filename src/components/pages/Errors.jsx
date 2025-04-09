import React from "react";
import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const Errors = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center items-center text-red-900">
          <TbError404 className="text-9xl" />
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-red-800 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-500 text-xl font-bold mb-8">
          We're sorry, but we're having trouble processing your request. Please
          try again later.
        </p>

        {/* Action Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md transition-all duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/browse")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-md transition-all duration-300"
          >
            Browse Page
          </button>
        </div>

        {/* Error Code */}
        <p className="mt-5 text-xl font-semibold text-red-800">
          Error Code: 500
        </p>
      </div>
    </div>
  );
};

export default Errors;
