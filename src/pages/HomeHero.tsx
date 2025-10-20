import Marquee from "react-fast-marquee";
import FourCard from "./Features/FourCards";
import Banner from "./Features/Banner";
import RandomSection from "./Features/RandomSection";
import { useLogoutMutation, useUserInfoQuery } from "@/redux/features/authentication/auth.api";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const HomeHero = () => {

  const { data: userInfo } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();

  const hour = new Date().getHours()
  let greetings = ""
  if (hour >= 5 && hour < 12) {
    greetings = "Good Morning 🌅"
  } else if (hour >= 12 && hour < 15) {
    greetings = "Good Noon ☀️"
  } else if (hour >= 15 && hour < 18) {
    greetings = "Good Afternoon 🌤️"
  } else if (hour >= 18 && hour < 21) {
    greetings = "Good Evening 🌙"
  } else {
    greetings = "Good Night 🌌"
  }

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <div className="">

      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-5">
          <img className="w-[74px] h-[74px] rounded-full border-2 border-amber-300" src={userInfo?.data?.profilePhoto} alt="" />

          <p className="text-2xl">
            <p className="text-xl text-start">
              {greetings}
            </p>
            {userInfo?.data?.name}
          </p>
        </div>
        <div>
          <p>Notification</p>
          <div className="flex items-center gap-4">
            {userInfo?.data?.email ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <div className="flex gap-2">
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Banner />
      <FourCard />

      {/* Cashback Marquee */}
      <div className="mt-5 rounded-md p-6 bg-[#4B8A6B] text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h2 className="text-center text-2xl tracking-tight font-bold">
              ক্যাশ-ইন ক্যাশব্যাক অফার
            </h2>
            <Marquee pauseOnHover gradient={false} className="text-lg font-medium">
              প্রতি ১০০০ টাকা ক্যাশ-ইন এ ১০ টাকা ক্যাশব্যাক! অফারটি চলবে সেপ্টেম্বরের ২৫ তারিখ পর্যন্ত 🎉
            </Marquee>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-6 py-3 rounded-md border border-gray-200 bg-gray-900 text-gray-50 font-semibold hover:bg-gray-800 transition"
            >
              এখনই ক্যাশ-ইন করুন
            </a>
          </div>
        </div>
      </div>

      <RandomSection />

    </div>
  );
};

export default HomeHero;
