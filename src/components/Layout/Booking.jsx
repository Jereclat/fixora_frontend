import React from "react";
import { Calendar } from "lucide-react";

export const Bookings = () => {
  const bookings = [
    {
      id: 1,
      user: {
        name: "Jordan Stevenson",
        username: "@amiccoo",
        avatar: "https://i.pravatar.cc/50?img=3",
      },
      email: "susanna.Lind57@gmail.com",
      date: "21 Jul",
      time: "08:20 - 10:30",
      status: "Pending",
    },
    {
      id: 2,
      user: {
        name: "Benedetto Rossiter",
        username: "@brossiter15",
        avatar: "https://i.pravatar.cc/50?img=5",
      },
      email: "estelle.Bailey10@gmail.com",
      date: "14 Aug",
      time: "09:00 - 11:00",
      status: "Active",
    },
    {
      id: 3,
      user: {
        name: "Davido Charlison",
        username: "@chaester95",
        avatar: "https://i.pravatar.cc/50?img=10",
      },
      email: "estelle.Bailey10@gmail.com",
      date: "11 Aug",
      time: "19:00 - 21:00",
      status: "Inactive",
    },
  ];

  const statusColor = {
    Pending: "bg-yellow-100 text-yellow-700",
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-200 text-gray-600",
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-xl max-h-[250px] scrollbar-hidden">
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b border-gray-300 bg-[#F5F5F7]">
              <th className="py-3 ps-4">User</th>
              <th className="py-3">Time & Date</th>
              <th className="py-3 pe-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-300 hover:bg-gray-50 transition"
              >
                {/* USER */}
                <td className="py-4 flex items-center gap-3 px-4">
                  <img
                    src={item.user.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{item.user.name}</p>
                    <p className="text-gray-500 text-sm">
                      {item.user.username}
                    </p>
                  </div>
                </td>

                {/* TIME & DATE — EXACT FORMAT LIKE YOUR IMAGE */}
                <td className="py-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-gray-500" />

                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <span>{item.date}</span>
                      <span className="font-light">||</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </td>

                {/* STATUS */}
                <td className="py-4 pe-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${statusColor[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
