
import { Link } from "react-router"
import logo from "../../assets/ChatGPT Image Aug 22, 2025, 02_19_24 PM.png"
export default function Welcome() {
  return (
   <div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
  <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-6">
    WELCOME TO THE
  </h1>

  <div className="flex justify-center mb-8">
    <img
      src={logo}
      alt="Logo"
      className="w-64 md:w-80 rounded-3xl border-4 border-amber-400 shadow-lg hover:scale-105 transition-transform duration-300 bg-white/70 backdrop-blur-sm p-2"
    />
  </div>

  
  <Link to={"/welcome"}
  className=" py-2 px-10 text-white text-xl font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer active:scale-95 rounded-xl shadow-md transition-all duration-300"
  > Next </Link>

</div>

  )
}
