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
              photoURL: NETFLIX_AVATAR_URL,
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

  // return (
  //   <div>
  //     <Header />
  //     <div className="absolute w-screen h-screen">
  //       <img
  //         src={NETFLIX_BACKGROUND_IMG}
  //         className="w-full h-full object-cover"
  //         alt="logo"
  //       />
  //     </div>
  //     <form
  //       onSubmit={(e) => e.preventDefault()}
  //       className="absolute w-3/12 my-28 mx-auto right-0 left-0 p-6 bg-black text-white rounded-lg opacity-70"
  //     >
  //       <h1 className="font-bold text-4xl py-4">
  //         {isSignInForm ? "Sign In" : "Sign Up"}
  //       </h1>
  //       {!isSignInForm && (
  //         <input
  //           ref={fullName}
  //           type="text"
  //           placeholder="Full Name"
  //           className="p-4 my-4 w-full border border-white font-semibold rounded-md"
  //         />
  //       )}
  //       <input
  //         ref={email}
  //         type="text"
  //         placeholder="Email"
  //         className="p-4 my-4 w-full border border-white font-semibold rounded-md"
  //       />
  //       <input
  //         ref={password}
  //         type="password"
  //         placeholder="Password"
  //         className="p-4 my-4 w-full border border-white  font-semibold rounded-md"
  //       />
  //       <p className="text-red-700 font-bold text-lg">{isError}</p>
  //       <button
  //         className="p-3 my-6 bg-red-700 text-lg font-bold w-full rounded-md"
  //         onClick={handleButton}
  //       >
  //         {isSignInForm ? "Sign In" : "Sign Up"}
  //       </button>
  //       <p className="text-lg">
  //         {isSignInForm ? "New To Netlfix?" : "Already have Account?"}
  //         <span
  //           className="text-white font-bold cursor-pointer px-1"
  //           onClick={handleToggleSwitch}
  //         >
  //           {!isSignInForm ? "Sign In" : "Sign Up"}
  //         </span>
  //       </p>
  //     </form>
  //   </div>
  // );

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
        className="absolute w-11/12 sm:w-7/12 md:w-6/12 lg:w-4/10 xl:w-4/12 my-10 sm:my-16 md:my-20 lg:my-28 mx-auto right-0 left-0 p-6 sm:p-8 bg-black text-white rounded-lg opacity-85 sm:mt-30 mt-30 shadow-2xl border border-gray-800"
      >
        <h1 className="font-bold text-3xl sm:text-3xl md:text-3xl py-2 sm:py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-800 border border-gray-700 focus:border-red-600 focus:outline-none font-semibold rounded-md transition-all duration-300"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-800 border border-gray-700 focus:border-red-600 focus:outline-none font-semibold rounded-md transition-all duration-300"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-800 border border-gray-700 focus:border-red-600 focus:outline-none font-semibold rounded-md transition-all duration-300"
        />
        <p className="text-red-700 font-bold text-base sm:text-lg min-h-6">
          {isError}
        </p>
        <button
          className="p-3 sm:p-4 my-3 sm:my-6 bg-red-700 hover:bg-red-800 text-base sm:text-lg font-bold w-full rounded-md transition-all duration-300"
          onClick={handleButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-base sm:text-lg text-gray-300 text-center">
          {isSignInForm ? "New To Netflix?" : "Already have an Account?"}
          <span
            className="text-white font-bold cursor-pointer px-1 hover:underline ml-1"
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
