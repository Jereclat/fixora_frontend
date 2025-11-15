import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: "/images/dashboard.png", path: "/dashboard" },
    { title: "Earnings", icon: "/images/earning.png", path: "/earnings" },
    { title: "Job Request", icon: "/images/job-request.png", path: "/job-request" },
    { title: "Job Histories", icon: "/images/job-history.png", path: "/job-histories" },
    { title: "Settings", icon: "/images/settings.png", path: "/settings" },
    { title: "Profile", icon: "/images/profile.png", path: "/profile" },
    { title: "Log Out", icon: "/images/logout.png", path: "/logout" },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full ${
          open || isHovered ? "w-64" : "w-20"
        } bg-white text-gray-800 p-4 flex flex-col transition-all duration-300 border-r border-gray-200 z-40`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header: Logo and Name */}
        <div className="mb-8 flex items-center">
          <img
            src="/images/logo.png" // Placeholder for logo, replace with actual path
            alt="Logo"
            className="h-10 w-10"
          />
          {(open || isHovered) && (
            <span className="ml-3 text-xl font-bold text-gray-800">Artiselo</span>
          )}
        </div>

        {/* Toggle Button - Floating */}
        {(open || isHovered) && (
          <button
            onClick={() => setOpen(!open)}
            className={`absolute top-4 right-4 p-2 rounded hover:bg-gray-300 transition-all duration-300 ${
              open ? "" : "right-2"
            }`}
          >
            {open ? "<<" : ">>"}
          </button>
        )}

        {/* Menu Items */}
        <nav className="flex-1 space-y-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="flex items-center w-full p-3 rounded hover:bg-gray-100 transition group"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-8 w-8"
              />

              {(open || isHovered) && (
                <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                  {item.title}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className={`flex-1 p-0 transition-all duration-300 ${
        open || isHovered ? "ml-64" : "ml-20"
      }`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
