import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className=" mx-40">
        <section className="flex py-7 items-center justify-between">
          <div>
            <h1 className="font-bold text-[2rem] text-indigo-600">Uprisee</h1>
          </div>
          <div className="">
            <Link
              to={"login"}
              className="p-3 py-2 text-lg border-2 border-slate-600 rounded-md m-5 text-slate-800"
            >
              Log in
            </Link>
            <Link
              to={"register"}
              className="p-3 py-2 text-lg bg-indigo-600 rounded-md m-5 text-white"
            >
              Get Started
            </Link>
          </div>
        </section>


        {/* //hero section */}
        <section className="flex py-10">
          <div className="w-1/2 flex flex-col gap-4 leading-tight">
            <span className="bg-indigo-400 w-fit text-lg text-white rounded-full font-semibold px-5 py-2">For Startups</span>
            <h1 className="text-[3rem] uppercase font-black text-slate-900">
              <span className="text-indigo-600">Funding Opportunities </span>
               & 
               <span className="text-indigo-600"> employees </span>
                at one place
            </h1>
            <p className="my-6 text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae perferendis voluptatibus officiis maxime quae corrupti itaque asperiores velit exercitationem.
            </p>
            <Link
              to={"register"}
              className="p-5 py-3 mt-7 w-fit text-xl bg-indigo-600 rounded-md text-white"
            >
              Get Started
            </Link>
          </div>
          <div>

          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
