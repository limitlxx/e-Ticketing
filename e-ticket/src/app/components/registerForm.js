import Link from "next/link";

export default function RegisterForm() {
    return(
        <div className="min-w-[30rem] w-[50%] mx-auto lg:ml-36 my-3 py-3">
            <form>
                <h1 className="text-center md:text-left md:ml-2 mt-5 mb-10 text-2xl text-[#364F6B] font-bold relative">Register Event</h1>

                <fieldset className="w-[70%] border-[1px] border-gray-400 rounded-lg mx-auto md:ml-2">
                    <legend className="ml-5 px-1 text-sm">Username</legend>
                    <input 
                    className="w-full pb-1 mb-1 px-3 outline-none text-gray-700 text-sm"
                    type="text" 
                    placeholder="Enter your full name"
                    />
                </fieldset>
                <Link href="/details/register/ticket">
                  <button className="bg-[#6d28d9] hover:bg-violet-500 text-white w-[70%] py-3 text-sm rounded-full mx-auto md:ml-2 mt-8 mb-16 block">Get Ticket</button>               
                </Link>
                
            </form>
        </div>
    )
}

