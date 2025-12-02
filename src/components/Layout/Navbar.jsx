import { Search, Languages, Sun, Star, Bell } from "lucide-react";

import profileAvatar from "../../assets/profileAvatar.png";

export const Navbar = () => {
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
