import { ConnectButton } from "@rainbow-me/rainbowkit";
import NavBar from "./components/navbar";
import LandingPage from "./components/landingpage";
import EventCard from "./components/eventCard";
import DetailPage from "./components/detailpage";


export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <EventCard />
      <DetailPage />
    </div>
  );
}


// import { useQuery } from '@apollo/client';
// import { gql } from '@apollo/client';
// import EventCard from '../components/EventCard';

// const GET_EVENTS = gql`
//   query GetEvents {
//     events {
//       id
//       name
//       category
//       ticketPrice
//       availableTickets
//     }
//   }
// `;

// export default function Home() {
//   const { loading, error, data } = useQuery(GET_EVENTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {data.events.map((event) => (
//           <EventCard key={event.id} event={event} />
//         ))}
//       </div>
//     </div>
//   );
// }