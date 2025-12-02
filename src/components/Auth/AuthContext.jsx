import React, { createContext, useContext, useEffect, useState } from "react";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api, { setAccessToken } from "./api/api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // This handles the first loading to which it checks if there is a valid cookie if yes bring a token
  // Else get out.
  useEffect(() => {
    const storedUser = localStorage.getItem("fixoraUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const login = async (data) => {
    try {
      const response = await axios.post(
        "https://backend.northernhavenaxis.com/api/login",
        data,

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          validateStatus: (status) => status < 500,
        }
      );

      if (response.status === 422) {
        const serverError = response.data.errors || {};
        const messages = Object.values(serverError).flat().join("\n");
        alert(messages || response.data.message || "Validation Failed");
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = (userData) => {
    localStorage.removeItem("fixoraUser");
    localStorage.removeItem("fixoraToken");

    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};