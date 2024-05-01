import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router";
import Header from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
const Body = () => {
  const dispatch=useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Login />
      </>
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  /* useEffect(()=>{
    onAuthStateChanged(auth,(user)=> {
      if(user){
        if(user){
          const {uid,email,displayName,photoURL}=user
        console.log("in Body user in useEffect ===> ",user);
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        }
        else
        {
          dispatch(removeUser())
        }
      }
    })
  },[]) */

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
