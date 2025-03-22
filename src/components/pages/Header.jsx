import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store) => store.user?.photoURL);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <div className="absolute px-10 w-screen py-2 bg-gradient-to-b from-black z-20 flex">
      <img src={NETFLIX_LOGO_URL} alt="logo_url" className="w-56 " />
      {user && (
        <div className="flex items-center gap-3 ml-auto">
          <img src={user} alt="logo_url" className="w-10 h-10" />
          <button
            className="border-1 bg-black border-black px-6 py-2 text-white font-bold rounded-md cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
