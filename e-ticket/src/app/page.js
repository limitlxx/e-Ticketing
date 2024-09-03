import { ConnectButton } from "@rainbow-me/rainbowkit";
import NavBar from "./navbar";
import LandingPage from "./landingpage";
import EventCard from "./eventCard";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <EventCard />
    </div>
  );
}
