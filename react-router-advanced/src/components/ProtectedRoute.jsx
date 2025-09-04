import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = false; // change to true to test access

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
