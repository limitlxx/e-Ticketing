import UniqueTicket from "@/app/components/uniqueTicket"
import NavBar from "@/app/components/navbar"
import EventTitle from "@/app/components/eventTitle"
import Banner from "@/app/components/banner"

function page() {
    return (
        <div>
            <NavBar />
            <Banner />
            <EventTitle />
            <UniqueTicket />
        </div>
    )
}

export default page
