import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import PageLoader from "../loader/PageLoader";

export const RoleRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  if (loading) {
    return <PageLoader active />;
  }

  if (!user || !roles.includes(user.role_type)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
