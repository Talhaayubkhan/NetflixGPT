import React from "react";
import InputSearchGPT from "./InputSearchGPT";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 w-screen">
        <img
          src={NETFLIX_BACKGROUND_IMG}
          alt="bg_img"
          className="w-full object-cover"
        />
      </div>
      <InputSearchGPT />
      <GPTMoviesSuggestions />
    </div>
  );
};

export default GPTSearch;
