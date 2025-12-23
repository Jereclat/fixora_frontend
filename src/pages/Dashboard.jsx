import React from "react";
import {
  Search,
  Settings,
  Crown,
  Monitor,
  Wrench,
  Edit3,
  Clock,
} from "lucide-react";

import { useState } from "react";

export const Dashboard = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [showLang, setShowLang] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const users = [
    {
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      avatar: "/images/john.png",
      role: { name: "Admin", icon: "🔧" },
      status: "Active",
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      email: "jane@example.com",
      avatar: "/images/jane.png",
      role: { name: "User", icon: "👤" },
      status: "Inactive",
    },
    {
      name: "Bob Johnson",
      username: "bobjohnson",
      email: "bob@example.com",
      avatar: "/images/bob.png",
      role: { name: "Moderator", icon: "🛡️" },
      status: "Active",
    },
    {
      name: "Alice Brown",
      username: "alicebrown",
      email: "alice@example.com",
      avatar: "/images/alice.png",
      role: { name: "Editor", icon: "✏️" },
      status: "Active",
    },
    {
      name: "Charlie Wilson",
      username: "charliewilson",
      email: "charlie@example.com",
      avatar: "/images/charlie.png",
      role: { name: "Viewer", icon: "👁️" },
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        {/* Search */}
        <div className="flex items-center space-x-3 flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search [CTRL + K]"
            className="border-none outline-none bg-gray-100 text-gray-700 placeholder-gray-400 px-3 py-2 rounded-md w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setShowLang(!showLang)}
            >
              <img
                src="/images/language.png" // Replace with your image
                alt="Language"
                className="h-6 w-6"
              />
            </button>

            {showLang && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md p-2 z-10">
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                  English
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                  Spanish
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                  French
                </button>
              </div>
            )}
          </div>

          {/* Theme Selector */}
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setShowTheme(!showTheme)}
            >
              <img
                src="/images/theme.png" // Replace with your image
                alt="Theme"
                className="h-6 w-6"
              />
            </button>

            {showTheme && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 z-10">
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                  Light
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                  Dark
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                  System
                </button>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition relative"
              onClick={() => setShowNotif(!showNotif)}
            >
              <img
                src="/images/notification.png" // Replace with your image
                alt="Notifications"
                className="h-6 w-6"
              />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotif && (
              <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md p-2 z-10">
                <p className="text-gray-500 text-sm">No new notifications</p>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
            <img
              src="/images/profile.png" // Replace with your profile image
              alt="Profile"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* First Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {/* Sales Overview */}
        <div className="rounded-2xl shadow-sm bg-white lg:col-span-2 col-span-1">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Sales Overview
                </h2>
                <p className="text-gray-500 text-sm">
                  Total 42.5k Sales{" "}
                  <span className="text-green-500 font-semibold">+18%</span>
                </p>
              </div>
              <div className="text-gray-400 text-xl cursor-pointer">⋮</div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-xl text-xl">👤</div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-800">
                      8,458
                    </p>
                    <p className="text-gray-500 text-sm">New Client</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-3 rounded-xl text-xl">📊</div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-800">
                      $28.5k
                    </p>
                    <p className="text-gray-500 text-sm">Earning</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <div className="bg-blue-100 p-3 rounded-xl text-xl">🔁</div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">2,450k</p>
                  <p className="text-gray-500 text-sm">Job's Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="rounded-2xl shadow-sm bg-white col-span-1">
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Client Rating</h2>
              <p className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full mt-1 w-fit">
                Year of 2025
              </p>

              {/* 4.5 Star Rating */}
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="relative">
                    <span className="absolute overflow-hidden w-1/2">★</span>
                    <span className="text-gray-300">★</span>
                  </span>
                </div>
                <span className="text-gray-500 text-sm ml-2">(4.5)</span>
              </div>
            </div>

            <div className="text-6xl ml-4">🧑‍🦱</div>
          </div>
        </div>

        {/* Sessions */}
        <div className="rounded-2xl shadow-sm bg-white col-span-1">
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Total Clients</h2>
              <p className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full mt-1 w-fit">
                Last Month
              </p>
              <p className="text-3xl font-bold mt-4">6 </p>
            </div>
            <div className="text-6xl ml-4">🧑‍💻</div>
          </div>
        </div>
      </div>

      {/* Second Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {/* WEEKLY SALES CAROUSEL */}
        <div className="md:col-span-3 rounded-2xl bg-[#5669FF] p-4 text-white shadow-lg relative overflow-hidden h-[250px]">
          {/* Title + dots */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Weekly Sales</h2>
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === i ? "bg-white" : "bg-blue-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <p className="text-sm text-blue-100">
            Total $23.5k Earning{" "}
            <span className="text-green-400 font-semibold">+62%</span>
          </p>

          <div className="mt-6">
            {/* SLIDE 1 – Mobiles & Computers */}
            {activeIndex === 0 && (
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Mobiles & Computers</h3>

                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        24
                      </span>
                      <span>Mobiles</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        50
                      </span>
                      <span>Accessories</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        12
                      </span>
                      <span>Tablets</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        38
                      </span>
                      <span>Computers</span>
                    </div>
                  </div>
                </div>

                <img
                  src="/images/phone.png"
                  alt="phone"
                  className="h-32 object-contain"
                />
              </div>
            )}

            {/* SLIDE 2 – Appliances & Electronics */}
            {activeIndex === 1 && (
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">
                    Appliances & Electronics
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        16
                      </span>
                      <span>TV's</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        9
                      </span>
                      <span>Cameras</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        40
                      </span>
                      <span>Speakers</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        18
                      </span>
                      <span>Consoles</span>
                    </div>
                  </div>
                </div>

                <img
                  src="/images/controller.png"
                  alt="controller"
                  className="h-32 object-contain"
                />
              </div>
            )}

            {/* SLIDE 3 – Fashion */}
            {activeIndex === 2 && (
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Fashion</h3>

                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        16
                      </span>
                      <span>TV's</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        43
                      </span>
                      <span>Shoes</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        40
                      </span>
                      <span>Speakers</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 px-3 py-1 rounded-lg">
                        7
                      </span>
                      <span>Sun Glasses</span>
                    </div>
                  </div>
                </div>

                <img
                  src="/images/watch.png"
                  alt="watch"
                  className="h-32 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* TOTAL VISITS – MOBILE VS DESKTOP */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-5 border h-[250px]">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Total Visits</p>
              <h2 className="text-2xl font-semibold mt-1">$42.5k</h2>
            </div>

            <p className="text-green-500 font-medium text-sm flex items-center gap-1">
              +18.4% <span className="text-green-400">▲</span>
            </p>
          </div>

          {/* Mobile vs Desktop */}
          <div className="flex justify-between items-center mt-6">
            {/* Mobile */}
            <div className="text-center">
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <span className="bg-yellow-50 p-1 rounded">📱</span>
                Mobile
              </div>
              <p className="text-2xl font-semibold mt-1">23.5%</p>
              <p className="text-gray-400 text-sm">2,890</p>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-px bg-gray-300" />
              <span className="bg-gray-100 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-xs mt-1">
                vs
              </span>
            </div>

            {/* Desktop */}
            <div className="text-center">
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <span className="bg-blue-50 p-1 rounded">💻</span>
                Desktop
              </div>
              <p className="text-2xl font-semibold mt-1">76.5%</p>
              <p className="text-gray-400 text-sm">22,465</p>
            </div>
          </div>

          {/* Bar */}
          <div className="mt-5 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400"
              style={{ width: "23.5%" }}
            ></div>
            <div
              className="h-full bg-blue-500"
              style={{ width: "76.5%" }}
            ></div>
          </div>
        </div>

        {/* SALES THIS MONTH – CHART LINE (SVG) */}
        <div className="md:col-span-1.5 bg-white rounded-2xl shadow-sm p-5 border h-[250px]">
          <p className="text-gray-500 text-sm">Sales This Month</p>
          <h2 className="text-2xl font-semibold mt-1">$28,450</h2>

          <p className="text-gray-500 text-sm mt-6">Total Sales This Month</p>

          {/* Chart Line (SVG) */}
          <svg
            viewBox="0 0 120 40"
            className="mt-4 w-full h-16 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M5 30 L20 30 L35 20 L50 25 L65 15 L80 22 L95 18 L110 25" />
          </svg>
        </div>
      </div>

      {/* Third Dashboard Grid */}
      <div className="grid grid-cols-3 gap-6 mt-10">
        {/* TABLE SECTION – Bigger side */}
        <div className="col-span-2">
          <div className="h-[400px] overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-gray-600 text-sm">
                <tr>
                  <th className="px-6 py-3 font-medium">USER</th>
                  <th className="px-6 py-3 font-medium">EMAIL</th>
                  <th className="px-6 py-3 font-medium">ROLE</th>
                  <th className="px-6 py-3 font-medium">STATUS</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {users.map((user, idx) => (
                  <tr
                    key={idx}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-gray-500 text-sm">{user.username}</p>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600">{user.email}</td>

                    <td className="px-6 py-4 flex items-center space-x-2">
                      {user.role.icon}
                      <span>{user.role.name}</span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ACTIVITY TIMELINE – Smaller side */}
        <div className="col-span-1">
          <div className="bg-white shadow-sm rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>

            <div className="space-y-5">
              {[
                {
                  title: "12 Invoices have been paid",
                  time: "12 min ago",
                  icon: <Crown className="w-5 h-5 text-purple-500" />,
                },
                {
                  title: "New device detected",
                  time: "20 min ago",
                  icon: <Monitor className="w-5 h-5 text-blue-500" />,
                },
                {
                  title: "System update available",
                  time: "1 hr ago",
                  icon: <Wrench className="w-5 h-5 text-yellow-500" />,
                },
                {
                  title: "Profile edited",
                  time: "2 hrs ago",
                  icon: <Edit3 className="w-5 h-5 text-green-500" />,
                },
                {
                  title: "Scheduled Task Completed",
                  time: "Yesterday",
                  icon: <Clock className="w-5 h-5 text-gray-500" />,
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-gray-100">
                    {activity.icon}
                  </div>

                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Forth Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* TOP REFERRAL SOURCES – WORK SUMMARY TABLE */}
        <div className="rounded-2xl shadow-sm bg-white p-6 h-[630px] flex flex-col">
          <h2 className="text-lg font-semibold mb-6">Top Referral Sources</h2>

          {/* Catalogue Section */}
          <div className="mb-4 p-4 bg-white-50 rounded-lg">
            <div className="flex justify-between gap-5">
              <div className="flex-1 bg-white p-2 rounded-md shadow-sm">
                <img
                  src="/images/phone.jpg"
                  alt="Phone Repair"
                  className="h-20 w-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1 bg-white p-2 rounded-md shadow-sm">
                <img
                  src="/images/desktop.jpg"
                  alt="Desktop Maintenance"
                  className="h-20 w-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1 bg-white p-2 rounded-md shadow-sm">
                <img
                  src="/images/controller.jpeg"
                  alt="Console Fix"
                  className="h-20 w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          <table className="w-full text-right border-collapse flex-1">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left">Image</th>
                <th className="py-3 text-right">Work Summary</th>
              </tr>
            </thead>
            <tbody>
              {[
                { img: "/images/phone.jpg", work: "Phone Camera Repair" },
                { img: "/images/desktop.jpg", work: "Desktop Maintenance" },
                {
                  img: "/images/controller.jpeg",
                  work: "Console Overheating Fix",
                },
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="py-4">
                    <img
                      src={row.img}
                      alt={row.work}
                      className="h-20 w-25 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-4 pl-6 text-gray-700 font-medium">
                    {row.work}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TOP REFERRAL SOURCES – CLIENT DETAILS TABLE */}
        <div className="rounded-2xl shadow-sm bg-white p-6 h-[630px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Client Details</h2>

          {/* Catalogue Section */}
          <div className="mb-4 p-4 bg-white-50 rounded-lg">
            <div className="flex justify-between gap-4">
              <div className="flex-1 bg-white p-2 rounded-md shadow-sm">
                <img
                  src="/images/phone.jpg"
                  alt="Phone Repair"
                  className="h-20 w-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1 bg-white p-2 rounded-md shadow-sm">
                <img
                  src="/images/desktop.jpg"
                  alt="Desktop Maintenance"
                  className="h-20 w-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1 bg-white p-2 rounded-md shadow-sm">
                <img
                  src="/images/controller.jpeg"
                  alt="Console Fix"
                  className="h-20 w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          <table className="w-full text-left flex-1">
            <thead>
              <tr className="border-b">
                <th className="py-3">Image</th>
                <th className="py-3">Name</th>
                <th className="py-3">Location</th>
                <th className="py-3">Charged</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  img: "/images/phone.jpg",
                  name: "Michael Doe",
                  location: "New York",
                  charge: "$250",
                },
                {
                  img: "/images/desktop.jpg",
                  name: "Sarah Lane",
                  location: "Dallas",
                  charge: "$180",
                },
                {
                  img: "/images/controller.jpeg",
                  name: "Jessie Waters",
                  location: "LA",
                  charge: "$320",
                },
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="py-4">
                    <img
                      src={row.img}
                      alt={row.name}
                      className="h-20 w-25 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-4 text-gray-800 font-medium">{row.name}</td>
                  <td className="py-4 text-gray-600">{row.location}</td>
                  <td className="py-4 font-semibold text-gray-900">
                    {row.charge}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
