import React from "react";

const Taskcard = () => {
  return (
    <>
      <div>
        
        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
            <div className="m-2">
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center mr-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
          <p className="text-sm mt-2">
            Task Done :  <span className="font-bold">2/5</span>
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full mt-2"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
            <div>
                <p className="text-gray-500 text-sm">Start Date</p>
                <p className="font-bold text-sm">27/06/20205</p>
            </div>
            <div>
                <p className="text-gray-500 text-sm">End Date</p>
                <p className="font-bold text-sm">27/06/20205</p>
            </div>
        </div>
        </a>
      </div>
    </>
  );
};

export default Taskcard;
