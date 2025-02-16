import { useEffect, useState } from "react";
import {ProductoForm} from "../components/templates/productos/productoForm";
import {ProductoList} from "../components/templates/productos/ProductoList";
import { CategoriaForm } from "../components/templates/categorias/CategoriaForm";
import { CategoriaList } from "../components/templates/categorias/CategoriaList";
export const Productos = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  return (
    <div>
      <h2>Productos</h2>
      
      <CategoriaForm onClose={() => {}}/>
      <CategoriaList />
      <ProductoForm onClose={() => {}}/>
    </div>
  );
};
