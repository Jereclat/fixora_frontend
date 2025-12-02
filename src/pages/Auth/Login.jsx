import React, { useState } from "react";
import { Mail, Apple, Chrome, Lock } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/Auth/AuthContext";
import axios from "axios";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const success = await login(data);
    if (success) {
      navigate("/Dashboard");
      setLoading(false);
    }

    console.log("error");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Log in to Fixora
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="flex flex-col space-y-7">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Input Email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid Email Address",
                  },
                })}
                className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#393ffd]"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                {...register("password", {
                  required: "Input Password",
                })}
                className="border w-full border-gray-300 rounded-md pl-10 pr-3 py-2 focus:ring-2 focus:outline-none focus:ring-[#393ffd] "
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-medium text-white transition-colors  ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#393ffd] hover:bg-[#2c33fa]  cursor-pointer"
            }`}
          >
            {loading ? "Logging In... " : "Login"}
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-[#393ffd] hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="flex items-center my-6">
          <hr className="grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="grow border-gray-300" />
        </div>

        {/* 
        <div className="space-y-3">
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
            <Chrome className="w-5 h-5 mr-2 text-gray-700" />
            Continue with Google
          </button>

          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
            <Apple className="w-5 h-5 mr-2 text-gray-700" />
            Continue with Apple
          </button>
        </div> 
        */}

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have a Fixora account?{" "}
          <Link to="/" className="text-[#393ffd] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
