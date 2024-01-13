import React from "react";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <div className="absolute   my-40 p-7 bg-black  bg-opacity-75   w-1/4 mx-auto right-0 left-0 ">
        <form action="" className="text-white">
          <h1 className="font-bold text-4xl p-3 my-3">
            {isSignInForm ? "Sign in " : "Sign up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              className="my-4 p-3 w-full rounded-lg bg-gray-800 opacity-80"
              placeholder="Enter your full name "
            />
          )}
          <input
            type="text"
            className="my-4 p-3 w-full rounded-lg bg-gray-800 opacity-80"
            placeholder="email or phone number "
          />

          <input
            type="text"
            className="my-4 p-3 w-full rounded-lg bg-gray-800 opacity-80"
            placeholder="password "
          />

          <input
            type="button"
            className="bg-red-600  w-full mt-7 p-4 rounded-lg"
            value={isSignInForm ? "Sign in" : "Sign up"}
          />

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
