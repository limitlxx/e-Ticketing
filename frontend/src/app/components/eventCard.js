
export default function EventCard() {
    return(
        <div className="min-w-full m-10 mx-auto flex justify-center items-center ">
            <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-custom-shadow overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-[20rem]" src="/Frame 13.svg" alt="Event Omage" />
                    </div> 
                    <div className="py-4 px-8">
                        <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">7th September 2024</div>
                        <a href="#" class="block mt-1 text-xl leading-tight font-bold text-[#364F6B] hover:underline">How Using VAs & AI Can Help You Boost Productivity And Close More Deals</a>
                        <div className="flex text-sm my-3 items-center justify-between ml-2 mr-9">
                            <p className="items-center flex text-[#765BFF] text-base font-semibold">
                                <span><img className="h-[15px] mx-1 text-lg" src="/placeholder.svg"/></span>Lagos, Nigeria
                            </p>
                            <p className="font-medium text-base text-[#364F6B]">10:00AM</p>
                        </div>
                        <div className="flex items-center gap-28 md:gap-10 mt-12">
                            <p className="flex items-center text-sm">
                                <span className="mr-1"><img src="/Group.svg" /></span> 10+ Users attending
                            </p>
                            <button className="bg-gradient-to-r from-slate-200 to-slate-400 from px-4 py-1 text-sm rounded-xl">Opened</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
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