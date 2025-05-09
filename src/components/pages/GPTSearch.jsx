import React from "react";
import InputSearchGPT from "./InputSearchGPT";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full h-screen">
        <img
          src={NETFLIX_BACKGROUND_IMG}
          className="h-full w-full object-cover"
          alt="bg_img"
        />
      </div>
      <div className="pt-30 sm:pt-30 md:pt-30 lg:pt-30">
        <InputSearchGPT />
        <GPTMoviesSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
