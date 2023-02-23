import React from "react";

const ProfileJobSeeker = () => {
  return (
    <>
      <div className="bg-white flex-1 rounded-lg p-5">
      <h1 className="mb-5 m-3 font-semibold text-lg">Company Information</h1>
        <hr />
        <div className="grid grid-cols-2 gap-x-3 p-3 w-3/4">
          <div className="input-form">
            <label>Startup Name</label>
            <input></input>
          </div>
          <div className="input-form">
            <label>Founder Name</label>
            <input></input>
          </div>
          <div className="input-form">
            <label>Website</label>
            <input></input>
          </div>
          <div className="input-form">
            <label>Loaction</label>
            <input></input>
          </div>
          <div className="input-form">
            <label>Bussiness email</label>
            <input></input>
          </div>
          <div className="input-form">
            <label>Number of Employee</label>
            <input></input>
          </div>
          <div className="">
            <button className="p-2 px-4 bg-indigo-600 mt-3 rounded-md text-white">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileJobSeeker;
