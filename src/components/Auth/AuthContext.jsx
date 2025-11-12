import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

        return false;
      }

      if (response.status === 200) {
        const userData = response.data.user;
        const userToken = response.data.access_token;
        const tokenExpiry = response.data.expires_at;

        setUser(userData);

        // Expiration Code from the backend
        if (tokenExpiry) {
          const initTime = new Date(tokenExpiry).getTime();
          const now = new Date().getTime();
          const timeUntilExpiry = initTime - now;

          console.log("Token expiry date:", new Date(initTime).toString());
          console.log("Current date:", new Date(now).toString());
          console.log("Time until Expiry", timeUntilExpiry / 1000, "seconds");
        }

        return true;
      }
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
      value={{ user, login, logout, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
