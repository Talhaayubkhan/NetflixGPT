import { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginInputField } from "../utils/validate";
import { NETFLIX_AVATAR_URL, NETFLIX_BACKGROUND_IMG } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isError, setIsError] = useState("");
  const [isSignInForm, setIsSignInForm] = useState(false);
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSwitch = () => {
    setIsSignInForm(!isSignInForm);
    setIsError(""); // clear errors on toggle
  };

  const handleButton = () => {
    let fullNameValue;
    if (!isSignInForm) {
      fullNameValue = fullName.current.value;
    } else {
      fullNameValue = null;
    }
    const message = validateLoginInputField(
      fullNameValue,
      email.current.value,
      password.current.value
    );
    setIsError(message);

    if (!message) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: fullName.current.value,
              photoURL: NETFLIX_AVATAR_URL,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid,
                    email,
                    displayName,
                    photoURL,
                  })
                );
              })
              .catch((error) => {
                setIsError(error.code + " " + error.message);
              });
          })
          .catch((error) => {
            setIsError(error.code + " " + error.message);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            setIsError(error.code + " " + error.message);
          });
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Header />
      <img
        src={NETFLIX_BACKGROUND_IMG}
        alt="Background"
        className="absolute w-full h-full object-cover -z-10 brightness-50"
      />
      <div className="flex flex-1 justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12 p-8 bg-black/70 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 text-white animate-fadeIn"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="inputField"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="inputField"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="inputField"
          />

          {isError && (
            <p className="text-red-500 text-sm font-semibold mt-2 min-h-6">
              {isError}
            </p>
          )}

          <button
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 w-full py-3 mt-6 rounded-md font-bold text-lg"
            onClick={handleButton}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-300 text-center mt-6">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}
            <span
              className="text-white font-bold ml-2 cursor-pointer hover:underline"
              onClick={handleToggleSwitch}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
