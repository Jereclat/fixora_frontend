import { Search, Languages, Sun, Star, Bell } from "lucide-react";

import profileAvatar from "../../assets/profileAvatar.png";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";

export const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, logout } = useAuth();

  // handle logout
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3 ">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-2 lg:w-full max-w-xl bg-gray-100 px-3 py-2 rounded-md">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search [CTRL + K]"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>

        <div>
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className={`text-white bg-[#6d4c41] rounded-xl py-2 px-6 font-semibold capitalize hidden lg:flex 
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
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 ml-4">
          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Avatar */}
          <img
            src={profileAvatar}
            alt="User"
            className="w-8 h-8 rounded-full border border-gray-100"
          />
        </div>
      </div>
    </nav>
  );
};
