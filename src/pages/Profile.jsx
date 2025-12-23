import React, { useRef, useState } from "react";
import {
  Edit3,
  UserPlus,
  MapPin,
  Calendar,
  Wrench,
  User,
  Check,
  CircleCheck,
  Briefcase,
  Flag,
  Languages,
  Phone,
  Mail,
  CalendarDays,
  CalendarCheck,
  Timer,
  Map,
  BadgeCheck,
  Drill,
  Gauge,
  ShieldUser,
  Landmark,
  CreditCard,
} from "lucide-react";
import Project from "./Project";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileImage, setProfileImage] = useState("/images/profile.png");
  const [bannerImage, setBannerImage] = useState("/images/plumber.jpg");

  const fileInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  // Profile Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  // Banner Image Change
  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setBannerImage(imageURL);
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* ========= PROFILE CARD ========= */}
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        {/* Banner */}
        <div
          className="w-full h-48 sm:h-64 md:h-65 relative cursor-pointer"
          onClick={() => bannerInputRef.current.click()}
        >
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-3 right-3 bg-black/50 p-2 rounded-full">
            <Edit3 className="text-white text-lg" />
          </div>

          <input
            type="file"
            ref={bannerInputRef}
            accept="image/*"
            onChange={handleBannerChange}
            className="hidden"
          />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 gap-6">
          {/* Profile Photo */}
          <div
            className="-mt-16 sm:-mt-20 relative cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <img
              src={profileImage}
              alt="User"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border-4 border-white bg-white shadow-md"
            />

            <div className="absolute bottom-1 right-1 bg-black/50 p-1 rounded-full">
              <Edit3 className="text-white text-xl" />
            </div>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* User Information */}
          <div className="flex-1 w-full sm:mt-4 mt-2">
            <div className="flex flex-col md:flex-row md:items-end items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-semibold mb-2">John Doe</h4>

                <ul className="flex flex-wrap justify-center sm:justify-start gap-4 text-black-700">
                  <li className="flex items-center gap-2">
                    <Wrench />
                    <span className="font-medium">Plumber</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <MapPin />
                    <span className="font-medium">Port Harcourt</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Calendar />
                    <span className="font-medium">Joined November 2025</span>
                  </li>
                </ul>
              </div>

              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center gap-2">
                <UserPlus />
                Connected
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========= NAVIGATION TABS ========= */}
      <div className="w-full mt-7">
        <div className="flex justify-center sm:justify-start">
          <ul className="flex flex-col sm:flex-row gap-8 mb-4">
            {/* Profile Tab */}
            <li>
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center px-4 py-2 rounded-lg shadow w-full sm:w-auto
        ${
          activeTab === "profile"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-black-700"
        }
      `}
              >
                <User size={18} className="mr-2" />
                Profile
              </button>
            </li>

            {/* Projects Tab */}
            <li>
              <button
                onClick={() => setActiveTab("projects")}
                className={`flex items-center px-4 py-2 rounded-lg shadow w-full sm:w-auto
        ${
          activeTab === "projects"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-black-700"
        }
      `}
              >
                <Wrench size={18} className="mr-2" />
                Projects
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* About User */}
      {activeTab === "profile" && (
        <div className="w-full flex flex-col md:flex-row gap-6 mt-4">
          <div className="w-full flex flex-col md:flex-row gap-6 mt-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full  sm:w-[480px]">
              <p className="text-xs uppercase text-black-500 font-semibold">
                About
              </p>

              <ul className="mt-3 py-1 space-y-4">
                <li className="flex items-center text-black-700">
                  <User className="w-6 h-6" />
                  <span className="font-medium mx-2">Full Name:</span>
                  <span>John Doe</span>
                </li>

                <li className="flex items-center text-black-700">
                  <CalendarDays className="w-6 h-6" />
                  <span className="font-medium mx-2">Date of Birth:</span>
                  <span>09/11/1998</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Flag className="w-6 h-6" />
                  <span className="font-medium mx-2">Country:</span>
                  <span>USA</span>
                </li>

                <li className="flex items-center text-black-700">
                  <CircleCheck className="w-6 h-6" />
                  <span className="font-medium mx-2">Status:</span>
                  <span>Active</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Briefcase className="w-6 h-6" />
                  <span className="font-medium mx-2">Role:</span>
                  <span>Plumber</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Languages className="w-6 h-6" />
                  <span className="font-medium mx-2">Languages:</span>
                  <span>English</span>
                </li>
              </ul>

              <p className="text-xs uppercase text-black-500 font-semibold mt-6">
                Contacts
              </p>

              <ul className="mt-3 py-1 space-y-4">
                <li className="flex items-center text-black-700">
                  <Phone className="w-6 h-6" />
                  <span className="font-medium mx-2">Contact:</span>
                  <span>(123) 456-7890</span>
                </li>

                <li className="flex items-center text-black-700">
                  <MapPin className="w-6 h-6" />
                  <span className="font-medium mx-2">Address:</span>
                  <span>567 ELM STREET</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Mail className="w-6 h-6" />
                  <span className="font-medium mx-2">Email:</span>
                  <span>john.doe@example.com</span>
                </li>
              </ul>

              <p className="text-xs uppercase text-black-500 font-semibold mt-6">
                Bank
              </p>

              <ul className="mt-3 py-1 space-y-4">
                <li className="flex items-center text-black-700">
                  <Landmark className="w-6 h-6" />
                  <span className="font-medium mx-2">Bank Name:</span>
                  <span>Union Bank</span>
                </li>

                <li className="flex items-center text-black-700">
                  <CreditCard className="w-6 h-6" />
                  <span className="font-medium mx-2">Account No:</span>
                  <span>123-456-7890</span>
                </li>

                <li className="flex items-center text-black-700">
                  <ShieldUser className="w-6 h-6" />
                  <span className="font-medium mx-2">Next of Kin:</span>
                  <span>Ella Doe</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-2xl p-6 w-full md:w-2/3">
              <p className="text-xs uppercase text-black-500 font-semibold">
                Discription
              </p>

              <p className="text-sm mt-2 text-black-500 font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                aliquid, dolores autem fugiat voluptates accusamus cupiditate
                molestias vitae nihil quo, sequi, commodi quas! Architecto,
                consequuntur ut aliquam ab ad aperiam.
              </p>

              <p className="text-xs uppercase text-black-500 mt-6 font-semibold">
                Work Summary
              </p>

              <ul className="mt-3 py-1 space-y-4">
                <li className="flex items-center text-black-700">
                  <CalendarDays className="w-6 h-6" />
                  <span className="font-medium mx-2">Year of Experience:</span>
                  <span>4 years</span>
                </li>

                <li className="flex items-center text-black-700">
                  <BadgeCheck className="w-6 h-6" />
                  <span className="font-medium mx-2">Specialty:</span>
                  <span>Expert in plumbing repairs & installations</span>
                </li>

                <li className="flex items-center text-black-700">
                  <CalendarCheck className="w-6 h-6" />
                  <span className="font-medium mx-2">Days Available:</span>
                  <span>Mon-Sat</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Timer className="w-6 h-6" />
                  <span className="font-medium mx-2">Working Hours:</span>
                  <span>9am - 5pm</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Map className="w-6 h-6" />
                  <span className="font-medium mx-2">Service Areas:</span>
                  <span>Huston</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Check className="w-6 h-6" />
                  <span className="font-medium mx-2">Completed Jobs:</span>
                  <span>15</span>
                </li>
              </ul>

              <p className="text-xs uppercase text-black-500 font-semibold mt-6">
                Tools & Equipment
              </p>

              <ul className="mt-3 py-1 space-y-4">
                <li className="flex items-center text-black-700">
                  <Wrench className="w-6 h-6" />
                  <span className="font-medium mx-2">Wrench Set</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Drill className="w-6 h-6" />
                  <span className="font-medium mx-2">Drilling Machine</span>
                </li>

                <li className="flex items-center text-black-700">
                  <Gauge className="w-6 h-6" />
                  <span className="font-medium mx-2">Pressure Pump</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === "projects" && (
        <div className="w-full mt-4">
          <Project />
        </div>
      )}
    </div>
  );
};

export default Profile;
