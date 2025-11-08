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

    setLoading(false)
  }, []);

  const login = async (userData) => {
    localStorage.setItem("fixoraUser", JSON.stringify(userData));
    localStorage.setItem("fixoraToken", "fakeToken");

    setUser(userData);
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
