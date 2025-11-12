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
    const checkSession = async () => {
      try {
        const response = await axios.post(
          "https://backend.northernhavenaxis.com/api/refresh",
          {},
          { withCredentials: true } 
        );

        const newAccessToken = response.data.access_token;
        const userData = response.data.user;

        if (newAccessToken && userData) {
          setAccessToken(newAccessToken);
          setUser(userData);
        }
      } catch (error) {
        console.log("No active session found.");
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "https://backend.northernhavenaxis.com/api/login",
        credentials,
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      if (response.status === 200) {
        const userData = response.data.user;
        const token = response.data.access_token;

        setUser(userData);
        setAccessToken(token);
        return true;
      }

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

  // Logout function
  const logout = async () => {
    try {
      await api.post("/logout"); 
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setUser(null);
      setAccessToken(null);
    }
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
