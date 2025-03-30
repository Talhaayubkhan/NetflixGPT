import { useDispatch } from "react-redux";
import { API_OPTIONS, fetchUpCommingMovies } from "../utils/constants";
import { addPopularMovies, addUpCommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();
  const getUpCommingMovies = async () => {
    const data = await fetch(fetchUpCommingMovies, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addUpCommingMovies(jsonData.results));
  };

  useEffect(() => {
    getUpCommingMovies();
  }, []);
};

export default useUpCommingMovies;
