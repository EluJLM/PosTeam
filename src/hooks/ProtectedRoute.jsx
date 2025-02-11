import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { routes } from "../utils/routes";
import { useEffect } from "react";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  useEffect(()=> {
    console.log(user);
    
  },[]);

  if (loading) return <p>Cargando...</p>;
  return user ? children : <Navigate to={routes.login} />;
}
