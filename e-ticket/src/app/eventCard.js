export default function EventCard() {
    return(
        <div className="min-w-full m-10 mx-auto flex justify-center items-center ">
            <div class="max-w-md mx-auto my-8 bg-white rounded-xl shadow-custom-shadow overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="/Frame 12.svg" alt="Event Omage" />
                    </div> 
                    <div class="py-4 px-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">7th September 2024</div>
                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Top 10 High-Impact Web3 Use Cases in 2024</a>
                    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}