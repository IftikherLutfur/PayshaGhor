import { Logo } from "@/assets/logo";
import { Link } from "react-router";
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api";

export function Navbar() {
  const { data: userInfo } = useUserInfoQuery(undefined);



  return (
    <header className="w-full fixed bottom-0 left-0 backdrop-blur-sm z-50">
    

        {/* Logo */}

        {/* Desktop Menu */}
        <nav className="bg-blue-100 backdrop-blur-3xl max-w-6xl mx-auto rounded-t-2xl">
          <ul className="flex items-center justify-center gap-6 text-sm font-semibold text-black">
            <li>
              <Link to="/Home" className="hover:text-yellow-400 transition-colors text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition-colors text-lg">
                About Us
              </Link>
            </li>
     <li>
         <Link to="/">
          <Logo />
        </Link>
     </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors text-lg">
                Contact Us
              </Link>
            </li>
            {userInfo?.data?.role === "ADMIN" ? (
              <li>
                <Link to="Dashboard/adminOverview" className="hover:text-yellow-400 transition-colors text-lg">
                  Dashboard
                </Link>
              </li>): 
             (<li>
                <Link to="/my-profile" className="hover:text-yellow-400 transition-colors text-lg">
                  Profile
                </Link>
              </li>)
            }
          </ul>
        </nav>

      
      <hr />
    </header>
  );
}
