import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Register = () => {
    const selectedRole = useLocation();

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-[90%] max-w-md mx-auto">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-8">
          {selectedRole === "client" && "Find your daddy"}
          {selectedRole === "professional" && "Find your daddy"}
          {selectedRole === "company" && "Find your daddy"}
        </h1>

        <form className="space-y-4">
            
          {/* First & Last name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password (8 or more characters)"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 text-sm">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 accent-[#393ffd] cursor-pointer"
              />
              <span>
                Send me helpful emails to find rewarding work and job leads.
              </span>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 accent-[#393ffd] cursor-pointer"
              />
              <span>
                Yes, I understand and agree to the{" "}
                <a
                  href="#"
                  className="text-[#393ffd] underline hover:no-underline"
                >
                  Terms of Service
                </a>
                , including the{" "}
                <a
                  href="#"
                  className="text-[#393ffd] underline hover:no-underline"
                >
                  User Agreement
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#393ffd] underline hover:no-underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#393ffd] text-white py-3 rounded-md font-semibold mt-2 hover:bg-[#393ffd] transition-colors"
          >
            Create my account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#393ffd] underline">
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};
