import React, { useState } from "react";
// import { Header } from "../../components/Header";
import { Building2, Users, UserStar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const PreRegister = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  const handleCard = (roles) => {
    setRole(roles);
  };

  return (
    <>
      {/* <Header /> */}

      <section className="w-full h-screen flex items-center justify-center">
        <div className="lg:w-[70%] w-[90%] flex flex-col m-auto align-middle">
          <h2 className="text-center text-4xl mb-10">
            Join as a client or Handiman
          </h2>

          <div className="flex justify-between flex-wrap ">
            <div
              className={`border border-gray-500 p-7 max-w-2xs rounded-xl m-auto 
            mb-10 cursor-pointer h-[200px] hover:bg-gray-100 hover:border-2 transition-colors
            ${role === "client" && "border-2 bg-gray-100"}`}
              onClick={() => handleCard("client")}
            >
              <div className="flex justify-between mb-4">
                <Users size={30} />
                <input
                  type="radio"
                  name="role"
                  checked={role === "client"}
                  onChange={() => {}}
                  id=""
                  className="scale-200 cursor-pointer accent-[#393ffd]"
                />
              </div>

              <p className="text-2xl font-semibold">
                I’m looking to hire a skilled worker for my project
              </p>
            </div>

            <div
              className={`border border-gray-500 p-7 max-w-2xs rounded-xl m-auto 
            mb-10 cursor-pointer h-[200px] hover:bg-gray-100 hover:border-2 transition-colors
            ${role === "professional" && "border-2 bg-gray-100"}`}
              onClick={() => handleCard("professional")}
            >
              <div className="flex justify-between mb-4">
                <UserStar size={30} />
                <input
                  type="radio"
                  name="role"
                  id=""
                  checked={role === "professional"}
                  onChange={() => {}}
                  className="scale-200 cursor-pointer accent-[#393ffd]"
                />
              </div>

              <p className="text-2xl font-semibold">
                I’m a professional offering my skills for hire
              </p>
            </div>

            <div
              className={`border border-gray-500 p-7 max-w-2xs rounded-xl m-auto 
            mb-10 cursor-pointer h-[200px] hover:bg-gray-100 hover:border-2 transition-colors
            ${role === "company" && "border-2 bg-gray-100"}`}
              onClick={() => handleCard("company")}
            >
              <div className="flex justify-between mb-4">
                <Building2 size={30} />
                <input
                  type="radio"
                  name="role"
                  id=""
                  checked={role === "company"}
                  onChange={() => {}}
                  className="scale-200 cursor-pointer accent-[#393ffd]"
                />
              </div>

              <p className="text-2xl font-semibold">
                We’re a service company managing several artisans
              </p>
            </div>
          </div>

          <div className="flex flex-col w-fit mx-auto lg:gap-3 gap-2">
            <button
              className={`bg-[#393ffd] py-1 px-4 rounded-lg 
            text-white font-semibold w-fit m-auto cursor-pointer
            
            ${!role && "bg-[#c4c4c4]"}`}
            disabled={!role}

             onClick={() => navigate("/register", { state: { role } })}
            >
              {!role && "Create an Account"}
              {role === "client" && "Find Your Handyman"}
              {role === "professional" && "Join as Professional"}
              {role === "company" && "Register Company"}
            </button>

            <p>
              Already have an account{" "}
              <Link to="/login" className="text-[#393ffd] underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
