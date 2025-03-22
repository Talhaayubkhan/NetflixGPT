import { useDispatch } from "react-redux";
import { API_OPTIONS, fetchNowPlayingMovies } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(fetchNowPlayingMovies, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
