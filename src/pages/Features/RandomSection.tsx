export default function RandomSection() {
  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-xl p-6 md:p-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            SECURE PAYMENT IN PAYSHAGHOR
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Experience seamless payments with PoyshaGhor Wallet — your all-in-one solution for sending money, managing expenses, and staying in control of your finances anytime, anywhere. Enjoy instant transactions, top-notch security, With PoyshaGhor, money management is effortless, reliable, and always at your fingertips.
          </p>
          <button className="mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md transition">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://i.pinimg.com/736x/2e/cd/88/2ecd886ae0e05f3465ee8061ca8123c0.jpg"
            alt="Secure Payment"
            className="rounded-xl shadow-md w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
