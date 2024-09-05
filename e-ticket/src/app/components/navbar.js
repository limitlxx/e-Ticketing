"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
//import downArrow from "../../public/downArroww.jpg"

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between px-5 py-1 items-center my-5">
      <Link href="/">
        <div className="text-lg font-bold ml-20">Web3Events</div>
      </Link>

      <div className="flex flex-row gap-10 mr-20 items-center">
        <div className="text-xs cursor-pointer flex items-center justify-center">
          <h1 className="text-[0.9rem] font-medium ">FIND EVENT</h1>
          <img
            src="/downArrow.svg"
            alt="down arrow"
            className="ml-1 w-3.5 translate-y-[0.10rem]"
          />
        </div>
        <Link href="/create-event">
          <div className="text-xs cursor-pointer  flex items-center justify-center">
            <h1 className="text-[0.9rem] font-medium ">CREATE EVENT</h1>
            <img
              src="/downArrow.svg"
              alt="down arrow"
              className="ml-1 w-3.5 translate-y-[0.10rem]"
            />
          </div>
        </Link>
        <div className="text-xs cursor-pointer flex items-center justify-center">
          <h1 className="text-[0.9rem] font-medium ">EXPLORE</h1>
          <img
            src="/downArrow.svg"
            alt="down arrow"
            className="ml-1 w-3.5 translate-y-[0.10rem]"
          />
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
