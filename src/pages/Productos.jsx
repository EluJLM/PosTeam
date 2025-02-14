import { useEffect, useState } from "react";
import {ProductoForm} from "../components/templates/productos/productoForm";
import {ProductoList} from "../components/templates/productos/ProductoList";
import { Categoria } from "../components/templates/categorias/Categoria";

export const Productos = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  return (
    <div>
      <h2>Lista de Productos</h2>
      
      <Categoria />
      <ProductoForm  onClose={() => {}}/>
      <ProductoList />
    </div>
  );
};
