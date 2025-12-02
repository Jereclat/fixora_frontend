import React, { useEffect, useState } from "react";

import watch from "../../assets/watch.png";
import phone from "../../assets/phone.png";
import pad from "../../assets/pad.png";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* WEEKLY SALES CAROUSEL */}
      <div
        className="md:col-span-3 rounded-2xl bg-[#5669FF] p-4 text-white shadow-lg 
      relative overflow-hidden h-[250px] overflow-y-hidden"
      >
        {/* Title + dots */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Weekly Sales</h2>
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? "bg-white" : "bg-blue-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <p className="text-sm text-blue-100 flex space-x-10">
          <p>Total $23.5k Earning</p>
          <span className="text-green-400 font-semibold">+62%</span>
        </p>

        <div className="mt-6">
          {/* SLIDE 1 – Mobiles & Computers */}
          {activeIndex === 0 && (
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">Mobiles & Computers</h3>

                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">24</span>
                    <span>Mobiles</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">50</span>
                    <span>Accessories</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">12</span>
                    <span>Tablets</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">38</span>
                    <span>Computers</span>
                  </div>
                </div>
              </div>

              <img src={phone} alt="phone" width={150} />
            </div>
          )}

          {/* SLIDE 2 – Appliances & Electronics */}
          {activeIndex === 1 && (
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Appliances & Electronics
                </h3>

                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">16</span>
                    <span>TV's</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">9</span>
                    <span>Cameras</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">40</span>
                    <span>Speakers</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">18</span>
                    <span>Consoles</span>
                  </div>
                </div>
              </div>

              <img src={pad} alt="controller" width={150} />
            </div>
          )}

          {/* SLIDE 3 – Fashion */}
          {activeIndex === 2 && (
            <div className="flex justify-between h-fit">
              <div>
                <h3 className="font-semibold text-lg">Fashion</h3>

                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">16</span>
                    <span>TV's</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">43</span>
                    <span>Shoes</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">40</span>
                    <span>Speakers</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 px-3 py-1 rounded-lg">7</span>
                    <span>Sun Glasses</span>
                  </div>
                </div>
              </div>

              <img src={watch} alt="watch" width={150} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
