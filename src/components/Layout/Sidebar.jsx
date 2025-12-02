import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  BookOpen,
  MessageSquare,
  Briefcase,
  History,
  Settings,
  HelpCircle,
  User,
  LogOut,
} from "lucide-react";

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { label: "Wallet", to: "/wallet", icon: <Wallet size={20} /> },
    { label: "Catalogue", to: "/catalogue", icon: <BookOpen size={20} /> },
    { label: "Messages", to: "/messages", icon: <MessageSquare size={20} /> },
    { label: "Job Request", to: "/jobRequest", icon: <Briefcase size={20} /> },
    {
      label: "Job Histories",
      to: "/jobHistories",
      icon: <History size={20} />,
    },
    { label: "Settings", to: "/settings", icon: <Settings size={20} /> },
    { label: "Support", to: "/support", icon: <HelpCircle size={20} /> },
    { label: "Profile", to: "/user", icon: <User size={20} /> },
    { label: "Logout", to: "/logout", icon: <LogOut size={20} /> },
  ];

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        h-screen fixed left-0 top-0 bg-white border-r border-r-gray-300
        transition-all duration-300 ease-in-out px-3 z-10
        ${expanded ? "w-50" : "w-15"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-center py-6"></div>

      {/* Menu */}
      <nav className="mt-10 flex flex-col space-y-5 items-center">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `
                flex items-center gap-4 p-3 rounded-md cursor-pointer ease-in-out
                transition-all duration-200 font-medium ${
                  expanded ? "w-full" : "w-fit"
                }
                ${
                  isActive
                    ? "bg-[#393ffd] text-white font-bold shadow-2xl"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `
            }
          >
            <span>{item.icon}</span>

            {expanded && <span className="text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
