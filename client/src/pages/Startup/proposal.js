import React from "react";
import CreateProposal from "./CreateProposal";

const proposal = () => {
  return (
    <div className="bg-white flex-1 rounded-lg p-5">
      <div className=" m-2 flex justify-between p-2">
        <h1 className="text-xl font-semibold">Your Proposal</h1>
        <CreateProposal />
      </div>
      <div className="p-2 border rounded-md h-[33rem] ">
        {/* <h1 className="text-xl text-center m-7">No Proposal !</h1> */}
        <div className="border p-2 m-2 rounded-md flex justify-between gap-1">
          <h1>Investor Name : john doe</h1>
          <h1>Subject : Seed capital funding for Scale</h1>
          <h1>Created At : 20-10-2022 - 6:30pm </h1>
        </div>
      </div>
    </div>
  );
};

export default proposal;
