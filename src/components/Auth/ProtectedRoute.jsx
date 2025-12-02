import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Still loading auth state?
  if (loading) {
    return <div>Loading...</div>;
  }

  // Not logged in?
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Authenticated → render child routes
  return <Outlet />;
};
