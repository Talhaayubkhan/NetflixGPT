import React from "react";
import InputSearchGPT from "./InputSearchGPT";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <img src={NETFLIX_BACKGROUND_IMG} alt="bg_img" />
      <InputSearchGPT />
      <GPTMoviesSuggestions />
    </div>
  );
};

export default GPTSearch;
