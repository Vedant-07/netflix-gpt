import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // Navigation code was here
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div className="relative min-h-screen">
  <div className="absolute inset-0">
    <img
      src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="background"
      className="object-cover w-full h-full"
    />
  </div>

  <div className="absolute inset-0 flex items-center justify-center">
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-80  p-8 bg-black bg-opacity-80 text-white rounded-lg shadow-lg"
    >
      <h1 className="font-bold text-3xl mb-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignInForm && (
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="input-field mb-4  p-2 w-full   bg-gray-700"
        />
      )}
      <input
        ref={email}
        type="email"
        placeholder="Email Address"
        className="input-field mb-4 w-full p-2 bg-gray-700"
      />
      <input
        ref={password}
        type="text"
        placeholder="Password"
        className="input-field mb-4 w-full p-2  bg-gray-700"
      />
      <p className="text-red-500 font-bold text-lg my-2">{errorMessage}</p>
      <button
        className="btn-primary mt-4 w-full py-3 rounded-lg bg-red-600"
        onClick={handleButtonClick}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="mt-4 cursor-pointer " onClick={toggleSignInForm}>
        {isSignInForm
          ? "New to Netflix? Sign Up Now"
          : "Already registered? Sign In Now."}
      </p>
    </form>
  </div>
</div>





    </>
  );
};

export default Login;
