import { useAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";

export function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(routes.login);
  };

  return (
    <div>
      <h1>Bienvenido, {user?.email}</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}
