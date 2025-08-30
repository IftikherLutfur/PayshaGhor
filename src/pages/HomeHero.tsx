import Marquee from "react-fast-marquee";
import FourCard from "./Features/FourCards";
import Banner from "./Features/Banner";
import RandomSection from "./Features/RandomSection";

const HomeHero = () => {

  return (
    <div className="  ">

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

      <RandomSection/>
      
    </div>
  );
};

export default HomeHero;
