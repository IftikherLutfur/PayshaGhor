import icon1 from "@/assets/images/icon_download_app_108x108.svg"
import icon2 from "@/assets/images/icon_star_exclusive_108x108.svg"
import icon3 from "@/assets/images/il_mobile_wallet.svg"
import icon4 from "@/assets/images/il_send_money.svg"

export default function FourCard() {
  return (
    <div className="my-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Your Complete Payment Solution
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="border p-6 rounded-xl flex flex-col items-center text-center h-72 shadow hover:shadow-2xl transition">
          <img className="mb-4 h-24 w-24 object-contain" src={icon1} alt="Pay Online" />
          <h3 className="font-bold text-lg mb-2">Pay Online</h3>
          <p className="text-gray-600">Make payments without sharing your bank details.</p>
        </div>

        {/* Card 2 */}
        <div className="border p-6 rounded-xl flex flex-col items-center text-center h-72 shadow hover:shadow-2xl transition">
          <img className="mb-4 h-24 w-24 object-contain" src={icon2} alt="Exclusive Offers" />
          <h3 className="font-bold text-lg mb-2">Exclusive Offers</h3>
          <p className="text-gray-600">Get access to exclusive offers and discounts.</p>
        </div>

        {/* Card 3 */}
        <div className="border p-6 rounded-xl flex flex-col items-center text-center h-72 shadow hover:shadow-2xl transition">
          <img className="mb-4 h-24 w-24 object-contain" src={icon3} alt="Mobile Wallet" />
          <h3 className="font-bold text-lg mb-2">Mobile Wallet</h3>
          <p className="text-gray-600">Store your cards and make payments easily.</p>
        </div>

        {/* Card 4 */}
        <div className="border p-6 rounded-xl flex flex-col items-center text-center h-72 shadow hover:shadow-2xl transition">
          <img className="mb-4 h-24 w-24 object-contain" src={icon4} alt="Send Money" />
          <h3 className="font-bold text-lg mb-2">Send Money</h3>
          <p className="text-gray-600">Quickly send money to friends and family.</p>
        </div>
      </div>
    </div>
  )
}
