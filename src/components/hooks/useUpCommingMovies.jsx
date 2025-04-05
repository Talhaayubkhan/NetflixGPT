import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, fetchUpCommingMovies } from "../utils/constants";
import { addPopularMovies, addUpCommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();

  const upCommingMovies = useSelector((store) => store.movies.upCommingMovies);
  const getUpCommingMovies = async () => {
    const data = await fetch(fetchUpCommingMovies, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addUpCommingMovies(jsonData.results));
  };

  useEffect(() => {
    !upCommingMovies && getUpCommingMovies();
  }, []);
};

export default useUpCommingMovies;
