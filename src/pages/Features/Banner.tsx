export default function Banner() {
  return (
    <div className="relative bg-gray-50">
      {/* Top Spacing */}
      <div className="py-20">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="uppercase text-5xl font-bold">
            send, spend
            <br />
            anywhere
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600">
           Experience seamless payments with PoyshaGhor Wallet — your all-in-one solution for sending money, managing expenses, and staying in control of your finances anytime, anywhere. Enjoy instant transactions, top-notch security, With PoyshaGhor, money management is effortless, reliable, and always at your fingertips.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center items-center gap-6 my-16 ">
          {/* Left Card */}
          <img
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1756458232/Background_-_2025-08-29T150230.385_bnudbk.png"
            alt="card-1"
            className="w-40 sm:w-52 md:w-60 rounded-xl shadow-lg transform -rotate-12"
          />

          {/* Middle Card */}
          <img
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1756458234/Background_-_2025-08-29T150150.432_gdxh5r.png"
            alt="card-2"
            className="w-44 sm:w-56 md:w-64 rounded-xl shadow-xl transform translate-y-4 z-10"
          />

          {/* Right Card */}
          <img
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1756458232/Background_-_2025-08-29T150230.385_bnudbk.png"
            alt="card-3"
            className="w-40 sm:w-52 md:w-60 rounded-xl shadow-lg transform rotate-12"
          />
        </div>
      </div>

      {/* Bottom White Cut */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white"></div>
    </div>
  );
}
