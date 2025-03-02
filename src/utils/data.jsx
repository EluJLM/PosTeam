import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser, AiOutlineShopping } from "react-icons/ai";

export const routes = {
  login: "/login",
  dashboard: "/dashboard",
  vender: "/vender",
  clientes: "/clientes",
  productos: "/productos",
};

// Menú para la barra lateral
export const navegacion = [
  { name: "Dashboard", icon: <AiOutlineDashboard size={28}/>, link: routes.dashboard },
  { name: "Vender", icon: <AiOutlineShoppingCart size={28}/>, link: routes.vender },
  { name: "Clientes", icon: <AiOutlineUser size={28}/>, link: routes.clientes },
  { name: "Productos", icon: <AiOutlineShopping size={28}/>, link: routes.productos },
];

export const t  ={
  titulo: "Pos Team",
  placeCorreo: "Ej: posteam@gmail.com",
  placeContraseña: "Contraseña",
}