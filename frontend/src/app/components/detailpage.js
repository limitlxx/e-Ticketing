
import Link from "next/link";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import JoinEvent from "./joinevent";

export default function DetailPage() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="min-w-[30rem] w-[50%] mx-auto lg:ml-36 my-3 pt-10 h-full pb-10">
        <div className="flex text-sm mx-1 my-3 items-center ml-2">
          <p className="items-center flex text-[#765BFF] text-base font-semibold">
            <span>
              <img className="h-[15px] mr-1 text-lg" src="/placeholder.svg" />
            </span>
            Lagos, Nigeria
          </p>
        </div>
        <div className="mx-2 border-b border-gray-400 pb-8">
          <p className="my-5 text-slate-500 text-base">Event Title</p>
          <h1 className="text-3xl font-bold text-[#364F6B]">
            How Using VAs & AI Can Help You Boost Productivity And Close More
            Deals
          </h1>
        </div>

        <div className="ml-2 my-8 flex items-center gap-40">
          <div>
            <p className="text-slate-500 font-medium text-base">Date</p>
            <p className="text-[#364F6B] font-bold text-base">
              7th September 2024
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-medium text-base">Time</p>
            <p className="text-[#364F6B] font-bold text-base">10:00PM</p>
          </div>
        </div>

        <div className="mt-10 mb-7 mx-2 pr-2">
          <h1 className="my-5 text-xl text-[#364F6B] font-bold">Description</h1>
          <p className="text-[#364F6B] font-normal text-base">
            Unlock the potential of virtual assistants (VAs) and artificial
            intelligence (AI) to supercharge your productivity and close more
            deals! Join industry experts as they dive into strategies for
            leveraging VAs and AI tools to streamline your workflow, manage
            tasks more efficiently, and enhance customer engagement. Discover
            how to automate repetitive tasks, optimize your time, and focus on
            what truly matters—growing your business. Whether you're a
            solopreneur, a small business owner, or part of a large sales team,
            this event will provide actionable insights and practical tips to
            help you maximize your results
          </p>
        </div>

        <div className="ml-2">
          <p className="flex items-center text-sm mb-8 font-medium text-gray-900">
            <span className="text-lg mr-1">
              <img src="/Group.svg" />
            </span>{" "}
            10+ Users attending
          </p>
          {/* <Link href="/details/register"> */}
         <JoinEvent />
        </div>
      </div>
    </div>
  );
}
