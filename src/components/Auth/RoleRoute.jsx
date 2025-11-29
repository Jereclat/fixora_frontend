import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Handles Role-based access control for the application
export const RoleRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <div> loading ...</div>;
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  if (!user || !roles.includes(user.role_type)) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
