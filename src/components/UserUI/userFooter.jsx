import { Link } from "react-router-dom";

export default function UserFooter() {
  return (
    <footer className="hidden lg:flex justify-between items-center px-10 py-6 mt-6 border-t border-gray-200 text-gray-500 text-sm">
      {/* Left side */}
      <div>
        &copy; {new Date().getFullYear()} Artiselo. All rights reserved.
      </div>

      {/* Right side - optional links */}
      <div className="flex gap-6">
        <Link to="/terms" className="hover:text-[#6d4c41] transition">
          Terms
        </Link>
        <Link to="/privacy" className="hover:text-[#6d4c41] transition">
          Privacy
        </Link>
        <Link to="/contact" className="hover:text-[#6d4c41] transition">
          Contact
        </Link>
      </div>
    </footer>
  );
}
