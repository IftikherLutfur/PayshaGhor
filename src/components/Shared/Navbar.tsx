import { Logo } from "@/assets/logo";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { useLogoutMutation, useUserInfoQuery } from "@/redux/features/authentication/auth.api";
import { useState } from "react";

export function Navbar() {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout =async () => {
    await logout(undefined).unwrap();
  };

  return (
  <header className="w-full backdrop-blur-sm">
  <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">

    <Link to="/">
      <Logo />
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm font-semibold text-black">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition-colors text-lg">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition-colors text-lg">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors text-lg">
            Contact
          </Link>
        </li>
        {userInfo?.data?.email && (
          <li>
            <Link to="/dashboard" className="hover:text-yellow-400 transition-colors text-lg">
              Dashboard
            </Link>
          </li>
        )}
      </ul>
    </nav>

    {/* Right Side Buttons */}
    <div className="flex items-center gap-4">
      {userInfo?.data?.email ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <div className="flex gap-2">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary">Register</Button>
          </Link>
        </div>
      )}

      {/* Mobile menu toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="block md:hidden rounded-md bg-gray-100 p-2.5 text-gray-600 hover:text-gray-800 transition"
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm w-full py-4">
      <ul className="flex flex-col gap-4 text-white text-center">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
        {userInfo?.data?.email ? (
          <li>
            <Link to="/dashboard" className="hover:text-yellow-400 transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>
              Dashboard
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button>Login</Button>
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary">Register</Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )}
  <hr />
</header>

  );
}
