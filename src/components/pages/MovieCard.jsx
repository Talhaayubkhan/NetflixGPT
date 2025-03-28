import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <>
      <div className="w-48 pr-5">
        <img src={IMG_URL + posterPath} alt="title" />
      </div>
    </>
  );
};

export default MovieCard;
