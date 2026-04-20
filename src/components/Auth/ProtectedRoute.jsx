// Here we use in memory when the page loads the state is set so as to give time
// For the the refresh endpoint to be full loaded in the authContext.
// If the token from the cookie in the backend is valid after the loading leave the user as isAuthenticated else render the login page.

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import PageLoader from "../loader/PageLoader";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <PageLoader active />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
