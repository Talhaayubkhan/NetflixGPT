import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { toggleGPT } from "../utils/gptSilce";
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
        navigate("/login");
      })
      .catch(() => {
        // An error happened.
        navigate("/Errors");
      });
  };

  const handleToggleSwitch = () => {
    dispatch(toggleGPT());
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

  return (
    <div className="absolute px-10 py-2 w-screen bg-gradient-to-b from-black z-20 flex">
      <img src={NETFLIX_LOGO_URL} alt="logo_url" className="w-52" />
      {user && (
        <div className="flex items-center gap-3 ml-auto">
          {gptSearch && (
            <select
              className="p-3 bg-black text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((language) => {
                return (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="border-1 bg-purple-700 border-black px-4 py-2 text-white font-bold rounded-md cursor-pointer"
            onClick={handleToggleSwitch}
          >
            {gptSearch ? "Browse Here" : "GPTSearch"}
          </button>
          <img src={user} alt="logo_url" className="w-10" />
          <button
            className="border-1 bg-white border-black px-4 py-2 text-black font-bold rounded-md cursor-pointer"
            onClick={handleSignOut}
          >
            <PiSignOutBold className="text-2xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
