import { Home, CalendarCheck, LifeBuoy, Search, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="
      lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 
      w-[90%] bg-white/80 backdrop-blur-xl
      shadow-xl border border-gray-200
      rounded-2xl z-50
    ">
      <div className="flex justify-around py-3">

        <Link to="/user/dashboard" className="flex flex-col items-center text-gray-600 hover:text-[#6d4c41] transition">
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link to="/bookings" className="flex flex-col items-center text-gray-600 hover:text-[#6d4c41] transition">
          <CalendarCheck size={22} />
          <span className="text-xs mt-1">Bookings</span>
        </Link>

        <Link to="/search" className="flex flex-col items-center text-gray-600 hover:text-[#6d4c41] transition">
          <Search size={22} />
          <span className="text-xs mt-1">Search</span>
        </Link>

        <Link to="/support" className="flex flex-col items-center text-gray-600 hover:text-[#6d4c41] transition">
          <LifeBuoy size={22} />
          <span className="text-xs mt-1">Support</span>
        </Link>

        <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-[#6d4c41] transition">
          <Wallet size={22} />
          <span className="text-xs mt-1">Payments</span>
        </Link>

      </div>
    </div>
  );
}
