import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "./../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch} from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch=useDispatch()

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
        password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: name.current.value,
             photoURL: USER_AVATAR,
          }).then(() => {
            //after navigate update...
            //dispathc the actio ti update the profile
            const {uid,email,displayName,photoURL}=auth.currentUser
        
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            //navigate('/browse')
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message)
          });
         
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
          // Navigation code was here
          //navigate('/browse')
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
    <Header/>
      <div className="relative min-h-screen">
  <div className="absolute inset-0">
    <img
      src={BG_URL}
      alt="background"
      className="object-cover w-screen h-screen"
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
