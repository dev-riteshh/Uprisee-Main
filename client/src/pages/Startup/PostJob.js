import React from "react";
import PostJobForm from "./components/PostJobForm";
import PostedJob from "./components/PostedJob";

const PostJob = () => {
  return (
    <div className="bg-white flex-1 rounded-lg p-5">
      <PostJobForm />
        <h1 className="m-2  pt-3 pl-3 text-xl font-semibold"> Posted Jobs</h1>
        <div className="grid grid-cols-3">
          <PostedJob />
        </div>
    </div>
  );
};

export default PostJob;
