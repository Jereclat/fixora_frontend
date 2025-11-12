// Here we use in memory when the page loads the state is set so as to give time
// For the the refresh endpoint to be full loaded in the authContext.
// If the token from the cookie in the backend is valid after the loading leave the user as isAuthenticated else render the login page.

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  // Implemented the states being isauth and loading
  const { isAuthenticated, loading } = useAuth();

  // Wait until we know whether the user is authenticated
  if (loading) {
    return <div>Loading...</div>; //(test)
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
