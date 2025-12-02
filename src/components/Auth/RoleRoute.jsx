import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import PageLoader from "../loader/PageLoader";

// Handles Role-based access control for the application
export const RoleRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  return (
    <>
      {/* Fade-Out Loader */}
      <PageLoader active={loading} />

      {/* When loading finishes, check roles */}
      {!loading && (!user || !roles.includes(user.role_type)) && (
        <Navigate to="/login" replace />
      )}

      {!loading && user && roles.includes(user.role_type) && children}
    </>
  );
};
