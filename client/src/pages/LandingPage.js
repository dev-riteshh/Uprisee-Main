import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className=" h-screen flex items-center justify-center">
        <div className="p-10 bg-white rounded-md">
          <h1 className="text-center text-lg font-bold mb-4">
            Main <br /> Landing Page
          </h1>
          <Link to={'login'} className="px-8 py-2 bg-indigo-600 rounded-md m-5 text-white">
            Log in
          </Link>
          <Link to={'register'} className="px-8 py-2 bg-indigo-600 rounded-md m-5 text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
