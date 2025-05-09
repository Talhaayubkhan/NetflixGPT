import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { clearGPTMovieResults, toggleGPT } from "../utils/gptSilce";
import { setLanguage } from "../utils/languageSlice";
import { PiSignOutBold } from "react-icons/pi";

const Header = () => {
  const user = useSelector((store) => store.user?.photoURL);
  const gptSearch = useSelector((store) => store.gpt.toggleSwitch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch(() => {
        // An error happened.
        navigate("/Errors");
      });
  };

  const handleToggleSwitch = () => {
    dispatch(toggleGPT());
    dispatch(clearGPTMovieResults());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe(); // Clean up subscription when component unmounts
  }, []);

  const handleLanguageChange = (e) => {
    const changeValue = e.target.value;
    dispatch(setLanguage(changeValue));
  };

  const handleImageClick = () => {
    navigate("/browse");
  };

  return (
    <div className="absolute w-full px-3 py-2 bg-gradient-to-b from-black z-20 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Logo */}
        <img
          src={NETFLIX_LOGO_URL}
          alt="logo_url"
          className="w-32 sm:w-32 md:w-40 lg:w-48 sm:mb-0 cursor-pointer"
          onClick={handleImageClick}
        />

        {/* User controls */}
        {user && (
          <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto sm:justify-end sm:ml-auto">
            {/* Language selector */}
            {gptSearch && (
              <select
                className="p-1 bg-black text-white rounded-lg text-sm sm:p-2 md:text-base"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGE.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT search toggle button */}
            <button
              className="bg-white px-2 py-1 text-black font-semibold rounded-md cursor-pointer text-xs sm:px-3 md:text-base md:px-4 md:py-2"
              onClick={handleToggleSwitch}
            >
              {gptSearch ? "Browse Here" : "GPT-Search"}
            </button>

            {/* User profile and sign out */}
            <div className="flex items-center gap-2 mt-1 sm:mt-0 sm:ml-2">
              <img
                src={user}
                alt="user_avatar"
                className="w-7 h-7 rounded-full sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
              <button
                className="bg-white px-2 py-1 text-black font-semibold rounded-md cursor-pointer flex items-center gap-1 text-xs sm:text-sm md:text-base sm:px-3 md:px-4 md:py-2"
                onClick={handleSignOut}
              >
                <span className="hidden sm:inline">SignOut</span>
                <PiSignOutBold className="text-lg sm:text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
