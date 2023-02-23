import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <div className="bg-white p-3">
          <h1 className="font-semibold">Sign in as</h1>
          <button
            onClick={() => navigate("/register/startupform")}
            className="font-semibold p-2 rounded-full text-white bg-slate-400 focus:bg-indigo-600"
          >
            Startup
          </button>
          <button
            onClick={() => navigate("/register/jobseekerform")}
            className="font-semibold p-2 rounded-full text-white bg-slate-400 focus:bg-indigo-600"
          >
            Job Seeker
          </button>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Register;
