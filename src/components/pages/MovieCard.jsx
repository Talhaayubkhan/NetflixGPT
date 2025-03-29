import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <>
      <div className="w-56 object-cover">
        <img src={IMG_URL + posterPath} alt="title" />
      </div>
    </>
  );
};

export default MovieCard;
