import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

export const Register = () => {
  const selectedRole = useLocation();
  const theRole = selectedRole.state?.role;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", { ...data, theRole });
    alert(
      `✅ Data ready to send:\n${JSON.stringify({ ...data, theRole }, null, 2)}`
    );
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-[90%] max-w-lg mx-auto">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-8">
          {theRole === "client" &&
            "Create an account to find and hire a handyman"}
          {theRole === "professional" &&
            "Create an account to offer your services and get hired"}
          {theRole === "company" &&
            "Create an account for your company to manage teams and jobs"}
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
              />

              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
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
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
              />

              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid Email Address",
                },
              })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {selectedRole.state.role === "company" && (
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name
              </label>

              <input
                type="text"
                placeholder="Registered Company Name"
                id="companyName"
                {...register("companyName", {
                  required: "Company Name is Required",
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 
                focus:ring-[#393ffd]"
              />

              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>
          )}

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
              {...register("password", {
                required: "Input Password",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
            />
          </div>

          <div className="space-y-3 text-sm">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                {...register("emails")}
                className="mt-1 accent-[#393ffd] cursor-pointer"
              />
              <span>
                Send me helpful emails to find rewarding work and job leads.
              </span>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                id="agreeToTerms"
                type="checkbox"
                {...register("agreeToTerms", {
                  required: "You must agree to the terms",
                })}
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

            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm">
                {errors.agreeToTerms.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#393ffd] text-white py-3 rounded-md font-semibold mt-2 
            hover:bg-[#2c33fa] transition-colors cursor-pointer"
          >
            Create my account
          </button>
        </form>

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
