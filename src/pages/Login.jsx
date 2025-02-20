import { useEffect, useState } from "react";
import { useAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/data";
import Input from "../components/moleculas/Input";
import Button from "../components/moleculas/Button";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(routes.dashboard);
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate(routes.dashboard);
    } catch (error) {
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <Input 
        label="Correo" 
        type="email" name="email" 
        value={email}
        placeholder="Correo"
        onChange={(e) => setEmail(e.target.value)} />
      <Input 
        label="Contraseña" 
        type="password" 
        name="password" 
        placeholder="Contraseña"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />

      <Button text="Entrar" onClick={handleLogin} />
    </div>
  );
}
