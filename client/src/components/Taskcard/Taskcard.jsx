import React from "react";

const Taskcard = () => {
  return (
    <>
      <div>
        
        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
            <div>
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Extra small
          </button>
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Extra small
          </button>
        </div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
           <div>
          <p>
            Task Done <span>2/5</span>
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div
              class="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
        </a>
      </div>
    </>
  );
};

export default Taskcard;
