
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  // Implemented the states being isauth and loading
  const { isAuthenticated, loading } = useAuth();

  // Wait until we know whether the user is authenticated
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};