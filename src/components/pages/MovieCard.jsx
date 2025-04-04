import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;

  return (
    <>
      <div className="w-48 cursor-pointer">
        <img
          src={`${IMG_URL}${posterPath}`}
          alt="movie_poster"
          className="rounded-lg"
        />
      </div>
    </>
  );
};

export default MovieCard;
