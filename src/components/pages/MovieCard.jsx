import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <>
      <div className="w-60 cursor-pointer">
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
