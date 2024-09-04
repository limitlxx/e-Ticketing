import Link from "next/link";

export default function LandingPage() {
    return(
        <div className="bg-[#765bffa4] min-w-full h-96 mx-auto flex justify-center items-center">
            <div className="text-center">
            <Link href="/details">
                <h1 className="text-3xl font-bold py-5 my-5">
                    SECURE YOUR SPOT AT THE NEXT BIG EVENT!
                </h1>
           </Link>
                <p className="pb-10 text-lg">
                    Explore events, book your spot and recive your unique ticket - all <br/> powered by blockchain technology
                </p>
                <button className="bg-gray-950 hover:bg-gray-900 text-white px-7 py-3 rounded-3xl">
                    EXPLORE EVENTS
                </button>
            </div>
        </div>
    )
}