import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {

 

  const ActiveLink =(props)=>{
    return <NavLink 
       style={({isActive,isHover})=>{
         return{
          color:isActive?'#fff':'#334155',
          background:isActive?'#4f46e5':'#fff',
          hover:isHover? '#94a3b8':''
         }
       }}
       {...props}
    />
  }

  return (
    <div className="flex flex-col bg-white w-[14rem] h-[85vh] rounded-lg p-4 justify-between">
      <div className="flex flex-col text-center">
        <ActiveLink
          to={"alljobs"}
          className=" font-semibold text-lg p-2 hover:text-white hover:bg-indigo-300 my-1 rounded-md"
        >
          All Jobs
        </ActiveLink>
        <ActiveLink
          to={"resume"}
          className=" font-semibold text-lg p-2 hover:text-white hover:bg-indigo-300 my-1 rounded-md"
        >
          Resume
        </ActiveLink>
        <ActiveLink
          to={"applications"}
          className=" font-semibold text-lg p-2 hover:text-white hover:bg-indigo-300 my-1 rounded-md"
        >
          Applications
        </ActiveLink>
        <ActiveLink
          to={"job-seeker-profile"}
          className=" font-semibold text-lg p-2 hover:text-white hover:bg-indigo-300 my-1 rounded-md"
        >
          Profile
        </ActiveLink>
      </div>
      <div className="flex justify-center"> 
        <ActiveLink to={"/login"} className='font-medium text-gray-500 text-lg p-2 border-grey-600 mb-5 border-2 hover:text-white hover:bg-indigo-300 my-1 rounded-md'>Log Out</ActiveLink>
      </div>
    </div>
  );
};

export default SideNav;
