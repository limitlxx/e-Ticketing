import Link from "next/link";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import RegisterForm from "./registerForm";


export default function JoinEvent() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button className="bg-[#6d28d9] hover:bg-violet-500 text-white px-32 py-3 text-sm rounded-full" onClick={() => setOpen(true)} >
                Create Event
            </button>
            {/* </Link> */}
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <TransitionChild>
                                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)} // Close drawer when 'X' button is clicked
                                            className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                        >
                                            <span className="absolute -inset-2.5" />
                                            <span className="sr-only">Close panel</span>
                                            {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
                                        </button>
                                    </div>
                                </TransitionChild>
                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Join Event</DialogTitle>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
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
                                            <h1 className="text-1xl font-bold text-[#364F6B]">
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
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
