import React, { useState } from 'react';
import useProductoStore from './../../../store/productoStore';
import {ProductoForm} from './productoForm';

export const ProductoItem = ({ producto }) => {
  const { removeProducto } = useProductoStore();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    removeProducto(producto.id);
  };

  return (
    <div>
      {isEditing ? (
        <ProductoForm producto={producto} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <p>{producto.nombre} - ${producto.precio}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
};
