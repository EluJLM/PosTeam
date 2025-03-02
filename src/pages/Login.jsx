import { useEffect, useState } from "react";
import { useAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { routes, t } from "../utils/data";
import Input from "../components/moleculas/Input";
import Button from "../components/moleculas/Button";
import styled from "styled-components";

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
    <DivCol>
      <h3>{t.titulo}</h3>
      <h2>Ingresar</h2>
      <Input 
        label="Correo" 
        type="email" 
        name="email" 
        value={email}
        placeholder={t.placeCorreo}
        onChange={(e) => setEmail(e.target.value)} />
      <Input 
        label="Contraseña" 
        type="password" 
        name="password" 
        placeholder="Contraseña"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />

      <Button text="Entrar" onClick={handleLogin} />
    </DivCol>
  );
}

const DivCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 15% auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    h2{
      font-size: 34px;
      margin-bottom: 20px;
    }
    h3{
      font-size: 18px;
      margin-bottom: 20px;
    }
`;
