import { Link } from "react-router";
import icon1 from "@/assets/images/il_send_money.svg"
export default function AgentMenu() {
  return (
 <div className="py-10 px-4">
      <h2 className="text-4xl font-bold mb-4">
        Services
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 space-x-0">
        {/* Card 1 */}
       
        
       <Link to={""}>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Cashin</h3>
        </div>
       </Link>
       <Link to={""}>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">Mobile Recharge</h3>
        </div>
       </Link>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className=" text-lg sm:text-xl text-gray-800">
             <p className="font-bold">Bill</p>
         <small className="italic">Upcoming feature</small>
            </h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className=" text-lg sm:text-xl text-gray-800">
             <p className="font-bold">Payment</p>
         <small className="italic">Upcoming feature</small>
            </h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className="text-lg sm:text-xl text-gray-800">
             <p className="font-bold">Government Fee</p>
         <small className="italic">Upcoming feature</small>
             </h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 x rounded-2xl  transition-shadow duration-300">
          <img
            className="mb-3 h-20 w-20 sm:h-24 sm:w-24 bg-amber-200 rounded-full p-3 object-cover"
            src={icon1}
            alt="Pay Online"
          />
          <h3 className=" text-lg sm:text-xl text-gray-800">
             <p className="font-bold">Education Fee</p>
         <small className="italic">Upcoming feature</small>
          </h3>
        </div>
       
        

      </div>
    </div>
  )
}
