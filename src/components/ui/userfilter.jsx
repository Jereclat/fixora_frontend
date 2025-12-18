import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function UserFilter() {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className="py-8">
      <span className="font-bold text-2xl text-black">
        Find Your Perfect Artisan
      </span>
      <div className="flex flex-wrap flex-1 py-6 gap-4">
        <div className="relative inline-block">
          <button
            onClick={() => setIsOpen(isOpen === "filter" ? null : "filter")}
            className="w-full md:w-auto bg-white py-2 text-gray-500 rounded-xl px-6 flex gap-2 capitalize border border-gray-200 hover:cursor-pointer"
          >
            <SlidersHorizontal className="text-gray-500 my-auto" size={17} />
            <span className="my-auto">filter</span>
          </button>

          {isOpen === "filter" && (
            <div className="absolute left-0 mt-2 top-full z-50 w-48 bg-white shadow-lg rounded-xl border border-gray-200 p-3 z-10">
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Test
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Testing Second
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <button
            onClick={() => setIsOpen(isOpen === "category" ? null : "category")}
            className="w-full md:w-auto bg-white py-2 text-gray-500 rounded-xl px-6 flex gap-2 capitalize border border-gray-200 hover:cursor-pointer"
          >
            <span className="my-auto">category: select category</span>
            <ChevronDown
              className={`text-gray-500 my-auto lg:ml-2 ml-auto transition-transform duration-200 ${
                isOpen === "category" ? "rotate-180" : "rotate-0"
              }`}
              size={17}
            />
          </button>
          {isOpen === "category" && (
            <div className="absolute left-0 mt-2 top-full z-50 w-48 bg-white shadow-lg rounded-xl border border-gray-200 p-3 z-10">
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Test
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Testing Second
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <button
            onClick={() => setIsOpen(isOpen === "location" ? null : "location")}
            className="w-full md:w-auto bg-white py-2 text-gray-500 rounded-xl px-6 flex gap-2 capitalize border border-gray-200 hover:cursor-pointer"
          >
            <span className="my-auto">Location: Select Location</span>
            <ChevronDown
              className={`text-gray-500 my-auto lg:ml-2 ml-auto transition-transform duration-200 ${
                isOpen === "location" ? "rotate-180" : "rotate-0"
              }`}
              size={17}
            />
          </button>
          {isOpen === "location" && (
            <div className="absolute left-0 mt-2 top-full z-50 w-48 bg-white shadow-lg rounded-xl border border-gray-200 p-3 z-10">
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Test
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Testing Second
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <button
            onClick={() => setIsOpen(isOpen === "rating" ? null : "rating")}
            className="w-full md:w-auto bg-white py-2 text-gray-500 rounded-xl px-6 flex gap-2 capitalize border border-gray-200 hover:cursor-pointer"
          >
            <span className="my-auto">Rating</span>
            <ChevronDown
              className={`text-gray-500 my-auto lg:ml-2 ml-auto transition-transform duration-200 ${
                isOpen === "rating" ? "rotate-180" : "rotate-0"
              }`}
              size={17}
            />
          </button>
          {isOpen === "rating" && (
            <div className="absolute left-0 mt-2 top-full z-50 w-48 bg-white shadow-lg rounded-xl border border-gray-200 p-3 z-10">
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Test
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Testing Second
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* SORT BY — responsive alignment */}
        <div className="w-full md:w-auto flex items-center gap-3 ml-0 lg:ml-auto">
          <span className="text-gray-500">Sort by :</span>
          <div className="relative inline-block">
            <button
              onClick={() => setIsOpen(isOpen === "pricing" ? null : "pricing")}
              className="bg-white py-2 text-gray-500 rounded-xl px-6 flex gap-2 capitalize border border-gray-200 hover:cursor-pointer"
            >
              <span className="my-auto">Pricing</span>
              <ChevronDown
                className={`text-gray-500 my-auto lg:ml-2 ml-auto transition-transform duration-200 ${
                  isOpen === "pricing" ? "rotate-180" : "rotate-0"
                }`}
                size={17}
              />
            </button>
            {isOpen === "pricing" && (
              <div className="absolute left-0 mt-2 top-full z-50 w-48 bg-white shadow-lg rounded-xl border border-gray-200 p-3 z-10">
                <ul className="flex flex-col gap-2 text-sm text-gray-700">
                  <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                    Test
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                    Testing Second
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
