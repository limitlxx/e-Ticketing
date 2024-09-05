import React from "react";
import Link from "next/link";
import { useState } from "react";
import { abi } from "../../../utils/abi";
import { contractAddress } from "../../../utils/services";
// import { Notifications } from "./notification";

import { useAccount, useReadContract } from "wagmi";
import { useRouter } from "next/navigation"; 
import { useEffect } from "react";

export default function EventCard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
   
  const { data: contractData, isError } = useReadContract({
    address: contractAddress,
    abi,
    functionName: "getAllEvent",
  });

  useEffect(() => {
    if (contractData) {
      setData(contractData);
      setLoading(false);
    }

    if (isError) {
      setError("Error occurred while fetching data");
      setLoading(false);
    }
  }, [contractData, isError]);

  if (loading) {
     return <svg
     className="animate-spin h-5 w-5 mr-2 text-white"
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
   >
     <circle
       className="opacity-25"
       cx="12"
       cy="12"
       r="10"
       stroke="currentColor"
       strokeWidth="4"
     ></circle>
     <path
       className="opacity-75"
       fill="currentColor"
       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
     ></path>
   </svg>
   ;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No events found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className=" ml-10 text-2xl font-semibold">Events</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8 sm:mx-10 gap-6">
        {data.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
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
                    How Using VAs & AI Can Help You Boost Productivity And Close
                    More Deals
                  </h2>
                  <div className="flex text-sm my-3 items-center justify-between">
                    <p className="flex items-center text-[#765BFF] font-semibold">
                      <img
                        className="h-[15px] mx-1"
                        src="/placeholder.svg"
                        alt="Location"
                      />
                      Lagos, Nigeria
                    </p>
                    <p className="font-medium text-base text-[#364F6B]">
                      10:00AM
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="flex items-center text-sm">
                      <img src="/Group.svg" alt="Attendees" className="mr-2" />{" "}
                      10+ Users attending
                    </p>
                    <button className="bg-gradient-to-r from-slate-200 to-slate-400 px-4 py-1 text-sm rounded-xl">
                      Opened
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


// import React from 'react';
// import Link from 'next/link';

// const EventCard = ({ event }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold">{event.name}</h2>
//       <p>Category: {event.category}</p>
//       <p>Price: {event.ticketPrice} ETH</p>
//       <p>Available Tickets: {event.availableTickets}</p>
//       <Link href={`/events/${event.id}`}>
//         <a className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
//           View Event
//         </a>
//       </Link>
//     </div>
//   );
// };
