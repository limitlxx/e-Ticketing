"use client";

import { useAccount, useReadContract } from "wagmi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { abi } from "../../utils/abi";

import NavBar from "./components/navbar";
import LandingPage from "./components/landingpage";
import EventCard from "./components/eventCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Set to false initially, so the drawer is closed by default
  const { isConnecting } = useAccount();
  const router = useRouter();

  const { data: contractData, isError } = useReadContract({
    address: "0xfde7e2D4a943da48416e2D2607e3396f405E25D7",
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(data);

  return (
    <div>
      <NavBar />
      <LandingPage />

      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="container mx-auto px-4 py-8">
          
        {data.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      
      </div>
    </div>
  );
}
