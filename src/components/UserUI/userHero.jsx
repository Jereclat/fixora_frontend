import React from "react";
import { Search } from "lucide-react";
import userHero from "../../assets/userHero.jpg";

export const UserHero = () => {
  return (
    <section className="w-full max-w-[1400px] m-auto px-4 sm:px-6 lg:px-0">
      {/* TOP BANNER */}
      <div className="w-full bg-[#d8e3f6] py-3 sm:py-4 px-4 sm:px-6 rounded-xl mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <p className="text-gray-800 md:text-base text-sm text-center sm:text-left">
          Get <span className="font-semibold"> ₦2,000</span> in credit when you
          refer a new
          <span className="font-semibold"> Artisan </span>
        </p>

        <a
          href="#"
          className="text-gray-800 font-medium hover:underline md:flex items-center gap-1 text-sm sm:text-base hidden"
        >
          Get offer <span>›</span>
        </a>
      </div>

      {/* HERO IMAGE + TEXT */}
      <div className="relative md:mt-10 mt-5">
        <img
          src={userHero}
          alt="hero"
          className="w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-3xl brightness-50"
        />

        {/* TEXT OVERLAY */}
        <div
          className="absolute top-1/2 left-5 sm:left-10 -translate-y-1/2 w-[90%] sm:w-[70%] lg:w-[55%] 
        text-white space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col"
        >
          <h1 className="text-3xl text-center md:text-left sm:text-xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
            Connect with skilled artisans and find unique, handcrafted goods.
          </h1>

          <button
            className="bg-brand shadow-lg shadow-blue-200  text-white text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg 
          font-semibold transition-all duration-300 hover:cursor-pointer md:w-fit mx-auto md:mx-0"
          >
            Explore Artisans
          </button>
        </div>
      </div>
    </section>
  );
};
