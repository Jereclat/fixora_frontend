import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";

export default function UserHeader() {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // handle logouot
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex justify-between lg:justify-center items-center gap-6 mx-auto text-lg w-[90%]">
        {/* Logo */}
        <div>
          <img
            src="/images/logo/logo-transparent.png"
            alt="Artiselo Logo"
            loading="lazy"
            height={70}
            width={70}
          />
        </div>

        {/* Links */}
        <div className="lg:flex hidden my-auto gap-10  flex-wrap flex-1 font-semibold text-gray-500  ml-5">
          <Link className="hover:text-[#6d4c41] transition-all duration-300 ease-in-out">Home</Link>
          <Link className="hover:text-[#6d4c41] transition-all duration-300 ease-in-out">Bookings</Link>
          <Link className="hover:text-[#6d4c41] transition-all duration-300 ease-in-out">Support</Link>
        </div>

        {/* Small gap before search */}
        <div className=" lg:flex items-center lg:gap-5 gap-0 hidden">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search artisans..."
            className="outline-none bg-transparent placeholder-gray-500 w-full hidden lg:flex"
          />
        </div>

        {/* Login button */}
        <div>
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className={`text-white bg-[#6d4c41] rounded-xl py-2 px-6 font-semibold capitalize hidden lg:flex 
    transition-all duration-300 ease-in-out
    ${
      isLoading
        ? "opacity-70 cursor-not-allowed"
        : "hover:bg-[#856051] cursor-pointer"
    }
  `}
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
        </div>

        {/* User avatar */}
        <div>
          <img
            src="/images/user.png"
            alt="Artiselo user"
            loading="lazy"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
      </div>
      <div className=" w-full h-[1px] bg-[#d7ccc8] item-center flex justify-center mx-auto"></div>
    </>
  );
}
