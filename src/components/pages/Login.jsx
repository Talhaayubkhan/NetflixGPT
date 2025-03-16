import { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginInputField } from "../utils/validate";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [isError, setIsError] = useState("");
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSwitch = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButton = () => {
    const message = validateLoginInputField(
      fullName.current.value,
      email.current.value,
      password.current.value
    );
    setIsError(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BACKGROUND_IMG} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-2xl opacity-75"
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
