import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ useAuth hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
