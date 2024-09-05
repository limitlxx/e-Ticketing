import Link from "next/link";
import React from "react";

const CreateEvent = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col justify-center items-center">
        <img className="min-w-full h-96" src="/creatEvt.svg" />
      </div>
      <div className=" ml-20 my-8">
        <h1 className=" text-[#122029c2] text-lg mb-2">Create Event</h1>
        <div className=" w-[60%] shadow-lg p-8">
          <h2 className=" text-2xl font-bold my-4">Event Details</h2>
          <hr />
          <div className=" my-6 bg-[#14537414] py-1 pl-4 rounded-md border-l-[6px] border-l-[#765BFF]">
            <input
              className=" bg-[#14527400] px-2 text-xl border-none outline-none py-4 w-full "
              type="text"
              placeholder="Event Title"
            />
          </div>
          <div className=" my-6  py-1 rounded-md">
            <textarea
              className="w-full bg-[#14537414] h-40 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#765BFF] focus:border-[#765BFF] "
              placeholder="Add description..."
            ></textarea>
          </div>
          <div className=" flex items-center">
            <input type="checkbox" className="mr-6 w-6 h-5" />
            <label className=" text-[#765BFF] font-semibold text-lg">
              Issue Ticket
            </label>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
            <div className=" text-center pt-16 bg-[#14537414] w-full rounded-lg ">
              upload image
            </div>
            <div className=" flex flex-col">
              <input
                className=" bg-[#14537414] p-4 mb-5 rounded-lg"
                type="date"
                placeholder="Choose Date"
              />
              <input
                className=" bg-[#14537414] p-4 mt-5 rounded-lg"
                type="time"
                placeholder="Choose Time"
              />
            </div>
          </div>
          <Link href="/details/register/ticket">
            <button className="bg-[#6d28d9] hover:bg-violet-500 text-white w-full py-3 text-base rounded-xl mx-auto md:ml-2 mt-8 block">
              Get Ticket
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
