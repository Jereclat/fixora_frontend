import { Link } from "react-router-dom";
import { Search, User, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../Auth/AuthContext";

import profile from "../../assets/profileAvatar.png";
import logo from "../../../public/images/logo/logoW.png";

export default function UserHeader() {
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // handle logout
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } finally {
      setIsLoading(false);
      setDropdownOpen(false);
    }
  };

  return (
    <>
      <div className="sticky top-2 rounded-xl z-50 bg-white w-[95%] mx-auto py-2 shadow-lg">
        <div className="flex items-center justify-between gap-6 mx-auto md:px-10 px-4">
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <div className="flex items-end">
              <img
                src="/images/logo/logo-transparent.png"
                alt="Artiselo Logo"
                loading="lazy"
                height={60}
                width={60}
              />

              <img src={logo} alt="" width={100} className="-ml-9 -z-1 mb-2 hidden md:block" />
            </div>

            {/* Links */}
            <div className="lg:flex hidden my-auto gap-10 flex-wrap text-gray-500 w-fit">
              <Link
                to={"/user/dashboard"}
                className="hover-text-brand transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
              <Link className="hover-text-brand transition-all duration-300 ease-in-out">
                Bookings
              </Link>
              <Link className="hover-text-brand transition-all duration-300 ease-in-out">
                Payments
              </Link>
              <Link className="hover-text-brand transition-all duration-300 ease-in-out">
                Support
              </Link>
            </div>
          </div>

          <div className="flex space-x-5">
            {/* Search */}
            <div className="lg:flex items-center lg:gap-5 gap-0 hidden bg-gray-200 py-2 px-3 rounded-xl">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search artisans..."
                className="outline-none bg-transparent placeholder-gray-500 w-full hidden lg:flex"
              />
            </div>

            {/* Logout button (Desktop only) */}
            {/* <div>
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className={`text-white bg-brand rounded-xl py-2 px-6 font-semibold capitalize hidden lg:flex 
              transition-all duration-300 ease-in-out ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#856051] cursor-pointer"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Loading
                </span>
              ) : (
                "Logout"
              )}
            </button>
          </div> */}

            {/* User avatar */}
            <div className="relative">
              {/* Desktop avatar: direct redirect */}
              <Link to="/profile" className="hidden lg:flex">
                <img
                  src={profile}
                  alt="Artiselo user"
                  loading="lazy"
                  height={40}
                  width={40}
                  className="rounded-full cursor-pointer"
                />
              </Link>

              {/* Mobile avatar: dropdown */}
              <div className="relative flex lg:hidden" ref={dropdownRef}>
                <img
                  src={profile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {/* User info */}
                    <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                      <img
                        src={user?.avatar || "/images/user.png"}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-semibold text-gray-700 truncate">
                        {user ? `${user.first_name} ${user.last_name}` : "User"}
                      </span>
                    </div>

                    {/* Menu items */}
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User size={18} />
                      <span>Profile</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 transition hover:cursor-pointer"
                    >
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
