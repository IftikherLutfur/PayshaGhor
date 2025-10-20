import icon1 from "@/assets/images/icon_download_app_108x108.svg"
import { Link } from "react-router"


export default function FourCard() {
  return (
    <div className="py-10 px-4">
      <h2 className="text-4xl font-bold mb-4">
        Services
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 space-x-0">
        {/* Card 1 */}
       
        
       <Link to={"/sendMoney"}>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Send Money</h3>
        </div>
       </Link>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Cashout</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Popup</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Bill</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Payment</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Government </h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Education</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Loan</h3>
        </div>
       
        

      </div>
    </div>
  )
}
