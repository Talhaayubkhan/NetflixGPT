import { useRef } from "react";
import { model } from "../utils/gemini";
import { API_OPTIONS, fetchMovieDetails } from "../utils/constants";
import { useDispatch } from "react-redux";
import { geminiMovieResults } from "../utils/gptSilce";

export const useMovieSearch = () => {
  const currentSearchInput = useRef();
  const dispatch = useDispatch();

  const fetchMovieDetailsFromTMDB = async (movieTitle) => {
    const response = await fetch(fetchMovieDetails(movieTitle), API_OPTIONS);
    const movieData = await response.json();
    return movieData?.results;
  };

  const searchMovies = async () => {
    const searchQuery = currentSearchInput.current.value;
    const recommendationPrompt = `Please recommend great movies related to ${searchQuery} and Respond in the same language as my query. Provide titles in a comma-separated list, organized by relevance or popularity. If my query is in a non-English language, please understand it and provide appropriate recommendations.`;

    // Call Gemini API to get movie suggestions
    try {
      const geminiResponse = await model.generateContent([
        recommendationPrompt,
      ]);
      const movieTitles = geminiResponse.response.text().split(",");

      // Fetch TMDB data for each movie title, returning an array of Promises
      const tmdbPromises = movieTitles.map((title) =>
        fetchMovieDetailsFromTMDB(title)
      );

      // Resolve all TMDB API Promises concurrently and get the results
      const movieResults = await Promise.all(tmdbPromises);

      // Dispatch the final movie data to the store
      dispatch(
        geminiMovieResults({ movieTitle: movieTitles, movies: movieResults })
      );
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
    // Clear the search input field
    currentSearchInput.current.value = "";
  };

  return {
    currentSearchInput,
    searchMovies,
  };
};
