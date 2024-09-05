"use client";

import Link from "next/link";

export default function EventCard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className=" ml-10 text-2xl font-semibold">Events</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8 sm:mx-10 gap-6">
        {/* Repeat this block for additional event cards */}
        <Link href="/details">
          <div className="bg-white rounded-xl shadow-custom-shadow hover:shadow-lg transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full xl:w-[20rem]"
                  src="/Frame 13.svg"
                  alt="Event Image"
                />
              </div>
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                  7th September 2024
                </div>
                <h2 className="block mt-1 text-xl leading-tight font-bold text-[#364F6B]">
                  How Using VAs & AI Can Help You Boost Productivity And Close More Deals
                </h2>
                <div className="flex text-sm my-3 items-center justify-between">
                  <p className="flex items-center text-[#765BFF] font-semibold">
                    <img className="h-[15px] mx-1" src="/placeholder.svg" alt="Location" />
                    Lagos, Nigeria
                  </p>
                  <p className="font-medium text-base text-[#364F6B]">10:00AM</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="flex items-center text-sm">
                    <img src="/Group.svg" alt="Attendees" className="mr-2" /> 10+ Users attending
                  </p>
                  <button className="bg-gradient-to-r from-slate-200 to-slate-400 px-4 py-1 text-sm rounded-xl">
                    Opened
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/details">
          <div className="bg-white rounded-xl shadow-custom-shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full xl:w-[20rem]"
                  src="/Frame 13.svg"
                  alt="Event Image"
                />
              </div>
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                  7th September 2024
                </div>
                <h2 className="block mt-1 text-xl leading-tight font-bold text-[#364F6B]">
                  How Using VAs & AI Can Help You Boost Productivity And Close More Deals
                </h2>
                <div className="flex text-sm my-3 items-center justify-between">
                  <p className="flex items-center text-[#765BFF] font-semibold">
                    <img className="h-[15px] mx-1" src="/placeholder.svg" alt="Location" />
                    Lagos, Nigeria
                  </p>
                  <p className="font-medium text-base text-[#364F6B]">10:00AM</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="flex items-center text-sm">
                    <img src="/Group.svg" alt="Attendees" className="mr-2" /> 10+ Users attending
                  </p>
                  <button className="bg-gradient-to-r from-slate-200 to-slate-400 px-4 py-1 text-sm rounded-xl">
                    Opened
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Repeat block ends */}
      </div>
    </div>
  );
}
