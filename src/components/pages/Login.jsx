import { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginInputField } from "../utils/validate";
import { NETFLIX_BACKGROUND_IMG, NETFLIX_USER_ICON } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState("");
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSwitch = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButton = () => {
    let fullNameValue;
    if (!isSignInForm) {
      fullNameValue = fullName.current.value; // Sign-up mode, fullName exists
    } else {
      fullNameValue = null; // Sign-in mode, no fullName input
    }
    const message = validateLoginInputField(
      fullNameValue,
      email.current.value,
      password.current.value
    );
    setIsError(message);

    if (!message) {
      if (!isSignInForm) {
        // manage SignIn/SignUp Logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: fullName.current.value,
              photoURL:
                "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
            })
              .then(() => {
                // Update successful.
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
                // ..
              });

            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsError(errorCode + " " + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsError(errorCode + " " + errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-screen h-screen">
        <img
          src={NETFLIX_BACKGROUND_IMG}
          className="w-full h-full object-cover"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 my-36 mx-auto right-0 left-0 p-10 bg-black text-white rounded-lg opacity-70"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full border border-white font-semibold rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full border border-white font-semibold rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full border border-white  font-semibold rounded-md"
        />
        <p className="text-red-700 font-bold text-lg">{isError}</p>
        <button
          className="p-3 my-6 bg-red-700 text-lg font-bold w-full rounded-md"
          onClick={handleButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-lg">
          {isSignInForm ? "New To Netlfix?" : "Already have Account?"}
          <span
            className="text-white font-bold cursor-pointer px-1"
            onClick={handleToggleSwitch}
          >
            {!isSignInForm ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
