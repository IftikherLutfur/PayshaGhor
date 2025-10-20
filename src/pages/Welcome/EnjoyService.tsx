import { Link } from "react-router"
import banner from "../../assets/Banner2.png"
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api";
export default function EnjoyService() {
    const { data: userInfo } = useUserInfoQuery(undefined);
    
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
        Have an amzing experience <br /> with PasyshaGhor right now
      </h1>

      <Link to={userInfo?.data?.email ? "/Home" : "/login"}
        className="py-2 px-10 text-white text-xl font-semibold bg-blue-500 hover:bg-blue-600 active:scale-95 rounded-xl shadow-md transition-all duration-300"
      >Next</Link>
    </div>
  )
}
