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
