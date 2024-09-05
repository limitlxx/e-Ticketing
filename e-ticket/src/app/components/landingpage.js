"use client"
import Link from "next/link";
import { useAccount } from 'wagmi';

import JoinEvent from "./joinevent";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function LandingPage() {
  const { isConnected } = useAccount();

  return (
    <div className="bg-[#765bffa4] min-w-full h-96 mx-auto flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-5 my-5">
          SECURE YOUR SPOT AT THE NEXT BIG EVENT!
        </h1>
        <p className="pb-10 text-lg">
          Explore events, book your spot and recive your unique ticket - all{" "}
          <br /> powered by blockchain technology
        </p> 
        {isConnected ? (
                
                <JoinEvent />
            ) : (
              <div className="px-64  py-3 text-sm rounded-full">
              <ConnectButton/>
              </div>
              
            )}
      </div>
    </div>


    
    
  );
}
{/* <div className="mx-auto flex flex-col justify-center items-center">
<img className="min-w-full h-96" src="/Frame 4.svg" />
</div> */}