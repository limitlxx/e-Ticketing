import EventTitle from "@/app/components/eventTitle";
import NavBar from "@/app/components/navbar";
import Banner from "@/app/components/banner";
import RegisterForm from "@/app/components/registerForm";

function page() {
  return (
    <div>
      <NavBar />
      <Banner />
      <EventTitle />
      <RegisterForm />
    </div>
  );
}

export default page;
