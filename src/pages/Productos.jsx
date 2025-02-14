import { useEffect, useState } from "react";
import FormAgregarProducto from "../components/FormAgregarProducto";
import { CrudCategoria } from "../supabase/crudCategorias";
import { CrudProducto } from "../supabase/crudProducto";

export const Productos = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  return (
    <div>
      <h2>Lista de Productos</h2>
      
      <CrudCategoria />
      <CrudProducto />
    </div>
  );
};
