import React from "react";

const Login = () => {
  return (
    <>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <div className="absolute   my-52 p-7 bg-black  bg-opacity-70   w-1/4 mx-auto right-0 left-0 ">
        <form action="" className="text-white">
          <h1 className="font-bold text-2xl p-3">Sign in</h1>
          <input
            type="text"
            className="my-2 p-1 w-full"
            placeholder="email or phone number "
          />

          <input
            type="text"
            className="my-2 p-2 w-full"
            placeholder="password "
          />

          <input
            type="button"
            className="bg-red-700 w-full my-2 p-4"
            value="Sign in"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
