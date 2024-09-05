function uniqueTicket() {
  return (
    <div className="min-w-full ml-28 m-10 ">
      <div className="max-w-md ml-10 my-8 rounded-xl overflow-hidden md:max-w-2xl">
        <h1 className=" text-2xl font-semibold mb-8">Your Unique Ticket</h1>
        <div class="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-[20rem]"
              src="/image 3.svg"
              alt="Event image"
            />
          </div>
          <div className="pb-4 px-8">
            <button className=" bg-gray-200 px-7 text-sm mb-4 rounded-xl text-[#5b5959] py-1 font-medium">
              TICKET
            </button>
            <div className="uppercase mb-2 tracking-wide text-sm text-gray-500 font-semibold">
              NFT permits one individual
            </div>
            <h1 class="block mt-1 text-[1.2rem] leading-tight font-bold text-[#364F6B]">
              How Using VAs & AI Can Help You Boost Productivity And Close More
              Deals
            </h1>
            <div className="text-sm my-3 flex items-center">
              <p className="items-center flex mr-2 text-[#C9CBCE] text-base font-semibold">
                status:
              </p>
              <p className="font-medium text-base text-[#15AF24]"> Going</p>
            </div>
            <div className="flex items-center gap-28 md:gap-10 mt-12">
              <p className="flex font-semibold items-center text-sm">
                <span className="mr-1">
                  <img src="/Group.svg" />
                </span>{" "}
                10+ Users attending
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center mt-10">
          <button className=" transition duration-300 rounded-3xl text-white bg-[#765BFF] hover:border-2 hover:bg-white hover:text-black px-[6.33rem] py-4">
            Download Ticket
          </button>
          <button className=" transition duration-300 rounded-3xl text-black border-2 px-[6.33rem] hover:bg-[#765BFF] hover:text-white py-4">
            Add to Calender
          </button>
        </div>
      </div>
    </div>
  );
}

export default uniqueTicket;
