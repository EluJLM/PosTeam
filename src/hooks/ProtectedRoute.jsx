import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { routes } from "../utils/data";
import { useEffect } from "react";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;
  return user ? children : <Navigate to={routes.login} />;
}
