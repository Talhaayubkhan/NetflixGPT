import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

export const useTrailerVideo = (videoId) => {
  const dispatch = useDispatch();

  const fetchTrailerVideo = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`;

    const response = await fetch(apiUrl, API_OPTIONS);
    const jsonResponse = await response.json();
    // console.log(response);
    const trailerVideos = jsonResponse?.results?.filter(
      (trailer) => trailer.type === "Trailer"
    );
    // console.log(trailerVideos);

    const firstTrailerVideo = trailerVideos.length
      ? trailerVideos[0]
      : jsonResponse.results[0];
    // console.log(firstTrailerVideo);
    dispatch(addTrailerVideo(firstTrailerVideo));
  };

  useEffect(() => {
    fetchTrailerVideo();
  }, []);
};
