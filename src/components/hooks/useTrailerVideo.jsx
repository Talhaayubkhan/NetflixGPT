import { useEffect } from "react";
import { API_OPTIONS, fetchCurrentMovieId } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

export const useTrailerVideo = (videoId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const fetchTrailerVideo = async () => {
    const apiUrl = fetchCurrentMovieId(videoId);

    const response = await fetch(apiUrl, API_OPTIONS);
    const jsonResponse = await response.json();
    const trailerVideos = jsonResponse?.results?.filter(
      (trailer) => trailer.type === "Trailer"
    );

    const firstTrailerVideo = trailerVideos.length
      ? trailerVideos[0]
      : jsonResponse.results[0];
    dispatch(addTrailerVideo(firstTrailerVideo));
  };

  useEffect(() => {
    !trailerVideo && fetchTrailerVideo();
  }, []);
};
