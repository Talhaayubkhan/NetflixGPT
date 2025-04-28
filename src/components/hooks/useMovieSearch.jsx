import { useRef, useState } from "react";
import { model } from "../utils/gemini";
import { API_OPTIONS, fetchMovieDetails } from "../utils/constants";
import { useDispatch } from "react-redux";
import { geminiMovieResults } from "../utils/gptSilce";

export const useMovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentSearchInput = useRef();
  const dispatch = useDispatch();

  const fetchMovieDetailsFromTMDB = async (movieTitle) => {
    const response = await fetch(fetchMovieDetails(movieTitle), API_OPTIONS);
    const movieData = await response.json();
    return movieData?.results;
  };

  const searchMovies = async () => {
    setIsLoading(true);
    const searchQuery = currentSearchInput.current.value;
    const recommendationPrompt = `Given the query: ${searchQuery}, recommend a list of relevant, popular movie titles. 
  - For English queries, provide English-language movies.
  - For non-English queries, suggest region-appropriate films or international hits.
  - Return only titles, comma-separated, sorted by relevance or popularity.
  - If the query is unclear, suggest movies based on common themes or genres`;
    w;
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
    } finally {
      setIsLoading(false); // End loading no matter what
      currentSearchInput.current.value = "";
    }
  };

  return {
    currentSearchInput,
    searchMovies,
    isLoading,
  };
};
