import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-7 flex flex-col gap-6 rounded-md w-[20rem] ">
        <h2 className=" text-lg font-bold">Log In Your Account</h2>
        <label className="flex flex-col">
          <span>Email</span>
          <input
            type="text"
            className=" rounded-md border-2 p-2"
            placeholder="Email"
          />
        </label>
        <label className="flex flex-col">
          <span>Password</span>
          <input
            type="text"
            className=" rounded-md border-2 p-2"
            placeholder="Password"
          />
        </label>
        <Link to={'/dashboard/investor'} className="rounded-md p-2 bg-indigo-600 text-white text-center">
            Log in 
        </Link>
        <span className=" text-center text-base">
          forgot Password ?{" "}
          <Link to={"/"} className="text-indigo-600">
            Recover Password
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LogIn;
