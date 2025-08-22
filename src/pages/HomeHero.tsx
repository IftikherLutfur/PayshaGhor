import { Logo } from "@/assets/logo";
import Marquee from "react-fast-marquee";

const HomeHero = () => {
    return (
      <div className="my-5">
  <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-3">
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">টাকা পাঠান</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">মোবাইল রিচার্জ</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">ক্যাশ আউট</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">পেমেন্ট</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">টাকা জমা</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">বিল পরিশোধ</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">সঞ্চয়</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">ঋণ</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">শিক্ষা ফি</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">টোল</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">রেমিট্যান্স</h1>
    </div>
    <div className="flex flex-col items-center text-center border-2 rounded-md bg-gray-200 p-3">
      <Logo />
      <h1 className="text-2xl font-semibold">দান</h1>
    </div>
  </div>

  <div className=" mt-5 rounded-md p-6 bg-violet-600 text-gray-50">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Title */}
      <h2 className="text-center text-2xl tracking-tight font-bold">
        মোবাইল রিচার্জে ক্যাশব্যাক অফার
      </h2>

      {/* Marquee Section */}
      <Marquee pauseOnHover gradient={false} className="text-lg font-medium">
        <span>
          প্রতি ১০০ টাকা রিচার্জে ১০ টাকা ক্যাশব্যাক! অফারটি চলবে সেপ্টেম্বরের ২৫ তারিখ পর্যন্ত 🎉
        </span>
      </Marquee>

      {/* CTA Button */}
      <a
        href="#"
        rel="noreferrer noopener"
        className="px-6 py-3 rounded-md border border-gray-200 bg-gray-900 text-gray-50 font-semibold hover:bg-gray-800 transition"
      >
        এখনই রিচার্জ করুন
      </a>
    </div>
  </div>
</div>
</div>

    );
};

export default HomeHero;