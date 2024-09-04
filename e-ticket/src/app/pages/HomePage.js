"use client"

import NavBar from "../components/navbar";
import LandingPage from "../components/landingpage";
import EventCard from "../components/eventCard";

function HomePage() {
    return (
        <div>
          <NavBar />
          <LandingPage />
          <EventCard />
        </div>
    )
}

export default HomePage
