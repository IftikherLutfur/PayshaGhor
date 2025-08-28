import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {  useNavigate } from "react-router";

const HomeHero = () => {
   const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ tagline: string; subtitle: string } | null>(null);

  // Simulate data fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        tagline: "Build Your Dreams with PoyshaGhor",
        subtitle: "Seamless transactions, easy management, and total control at your fingertips.",
      });
      setLoading(false);
    }, 1500); // 1.5 sec delay
    return () => clearTimeout(timer);
  }, []);
    return (
      <div className="my-5">
  

     <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        {loading ? (
          // Skeleton loader
          <div className="space-y-4 w-full max-w-xl animate-pulse">
            <div className="h-12 bg-white/30 rounded-lg w-3/4 mx-auto"></div>
            <div className="h-6 bg-white/20 rounded-lg w-5/6 mx-auto"></div>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="h-10 w-32 bg-white/30 rounded-lg"></div>
              <div className="h-10 w-32 bg-white/20 rounded-lg"></div>
            </div>
          </div>
        ) : (
          // Actual content
          <div className="space-y-6 transition-opacity duration-700 ease-in opacity-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {data?.tagline.split("PoyshaGhor").map((part, idx) =>
                idx === 1 ? (
                  <span key={idx} className="text-yellow-400">
                    PoyshaGhor
                  </span>
                ) : (
                  part
                )
              )}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl drop-shadow">{data?.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/signup")}
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition"
              >
                Get Started
              </Button>
              <Button
                onClick={() => navigate("/features")}
                className="bg-transparent border border-white hover:bg-white hover:text-black transition"
              >
                Learn More
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Background illustration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-50px] opacity-20"
          width="1200"
          height="600"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="600" cy="300" r="300" fill="white" />
        </svg>
      </div>
    </section>

    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
		</div>
	</div>
</section>

  <div className=" mt-5 rounded-md p-6 bg-amber-500 text-gray-50">
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