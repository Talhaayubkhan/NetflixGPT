import React from "react";
import InputSearchGPT from "./InputSearchGPT";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={NETFLIX_BACKGROUND_IMG} alt="bg_img" />
      </div>
      <InputSearchGPT />
      <GPTMoviesSuggestions />
    </div>
  );
};

export default GPTSearch;
