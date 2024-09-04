import React from "react";
import Link from "next/link";
import { useState } from "react";


const products = [
  {
    id: 1,
    title: "Basic Tee 8-Pack",
    description: "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    colors: "8 colors",
    price: "$256",
    image: "/path-to-image.jpg", // Replace with the actual image path
  },
  {
    id: 1,
    title: "Basic Tee 8-Pack",
    description: "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    colors: "8 colors",
    price: "$256",
    image: "/path-to-image.jpg", // Replace with the actual image path
  },
  {
    id: 1,
    title: "Basic Tee 8-Pack",
    description: "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    colors: "8 colors",
    price: "$256",
    image: "/path-to-image.jpg", // Replace with the actual image path
  },
  {
    id: 1,
    title: "Basic Tee 8-Pack",
    description: "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    colors: "8 colors",
    price: "$256",
    image: "/path-to-image.jpg", // Replace with the actual image path
  },
  {
    id: 1,
    title: "Basic Tee 8-Pack",
    description: "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    colors: "8 colors",
    price: "$256",
    image: "/path-to-image.jpg", // Replace with the actual image path
  },
  // Add more product objects
];



export default function EventCard(event) {
  const [open, setOpen] = useState(false); // Set to false initially, so the drawer is closed by default

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {products.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <div className="bg-white rounded-lg overflow-hidden shadow-md border cursor-pointer">
            <img src={event.ipfshash} alt={event.name} className="object-cover w-full h-64" />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">{event.title}</h2>
              <p className="text-sm text-gray-500 mt-2">{event.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">{event.colors}</p>
                <p className="text-lg font-medium text-gray-900">{event.price}</p>
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
