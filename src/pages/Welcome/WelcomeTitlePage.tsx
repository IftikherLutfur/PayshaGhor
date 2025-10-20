import { Link } from "react-router"
import banner from "../../assets/Background - 2025-10-13T130927.140.png"
export default function WelcomeTitlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-50 to-blue-100 py-20 px-2">
        <div className="flex justify-center">
            <img
             src={banner} 
             alt="banner"
             className="w-96"
             />
        </div>
        <h1 className="text-3xl test-center font-bold my-5">
            The best app for finance, <br /> banking & e-wallet today
        </h1>
       
    <Link
    className="w-full md:w-1/3 py-2 px-10 text-white text-xl font-semibold bg-blue-500 hover:bg-blue-600 active:scale-95 rounded-xl shadow-md transition-all duration-300"
    to={"/welComes"}>Next</Link>
  
        </div>
  )
}
