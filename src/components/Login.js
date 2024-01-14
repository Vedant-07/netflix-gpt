import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const pwd = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    //console.log(email.current.value, " ", pwd.current.value);
    const msg = checkValidData(
      email.current.value,
      pwd.current.value,
      name?.current?.value
    );
    console.log(msg);
    setErrMsg(msg);
  };

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="kuch tho hai idhar"
        />
      </div>
      <div className="absolute   my-40 p-7 bg-black  bg-opacity-75   w-1/4 mx-auto right-0 left-0 ">
        <form
          action=""
          className="text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-4xl p-3 my-3">
            {isSignInForm ? "Sign in " : "Sign up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              className="my-4 p-3 w-full rounded-lg bg-gray-800 opacity-80"
              placeholder="Enter your full name "
            />
          )}
          <input
            ref={email}
            type="text"
            className="my-4 p-3 w-full rounded-lg bg-gray-800 opacity-80"
            placeholder="email or phone number "
          />

          <input
            ref={pwd}
            type="text"
            className="my-4 p-3 w-full rounded-lg bg-gray-800 opacity-80"
            placeholder="password "
          />

          <p className="text-yellow-400 text-center mt-3">
            {errMsg && <>⚠️{errMsg}</>}
          </p>

          <button
            className="bg-red-600 w-full mt-7 p-3 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>

          <div className=" flex p-1 my-4 w-full">
            {isSignInForm ? (
              <>
                New to Netflix |
                <p
                  className=" mx-2 underline cursor-pointer "
                  onClick={toggleSigninForm}
                >
                  Sign up now
                </p>
              </>
            ) : (
              <>
                {" "}
                Already a user |
                <p
                  className=" mx-2 underline cursor-pointer "
                  onClick={toggleSigninForm}
                >
                  Sign in now
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
