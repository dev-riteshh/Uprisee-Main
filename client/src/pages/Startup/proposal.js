import React from "react";

const proposal = () => {
  return (
    <div className="bg-white flex-1 rounded-lg p-5 h-[85vh] overflow-hidden overflow-y-auto">
      <div className=" m-2 flex align-middle justify-between p-2">
        <h1 className="text-xl font-semibold">Your Proposal</h1>
      </div>
      <div className="p-5 border rounded-md flex flex-col items-center">
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>

        <div className="flex mt-5">
          <button className="p-2 px-3 bg-indigo-600 rounded-md text-white">
            upload proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default proposal;
