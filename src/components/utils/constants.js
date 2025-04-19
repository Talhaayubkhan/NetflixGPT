export const NETFLIX_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/PK-en-20250303-TRIFECTA-perspective_81e7cf7d-5993-49ed-bfa1-53cf9ec9f386_large.jpg";

export const NETFLIX_HOME_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const NETFLIX_LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_USER_ICON =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const NETFLIX_AVATAR_URL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const fetchCurrentMovieId = (videoId) => {
  return `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`;
};

export const fetchNowPlayingMovies =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const fetchPopularMovies =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const fetchTopRatedMovies =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const fetchUpCommingMovies =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const fetchTrendingMovies =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US";

export const fetchMovieDetails = (movieTitle) => {
  return `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_FIREBASE_API_OPTIONS_AUTH}`,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "ur", name: "اردو" },
  { identifier: "sp", name: "Spanish" },
  { identifier: "fr", name: "French" },
  { identifier: "gr", name: "German" },
];

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const GEMINI_MODEL = "gemini-1.5-pro";
