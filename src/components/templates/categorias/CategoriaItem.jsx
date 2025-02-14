
import React, { useState } from 'react';
import {CategoriaStore} from '../../../store/categoriaStore';
import {CategoriaForm} from './CategoriaForm';

export const CategoriaItem = ({ categoria }) => {
  const { removeCategoria } = CategoriaStore();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    removeCategoria(categoria.id);
  };

  return (
    <div>
      {isEditing ? (
        <CategoriaForm categoria={categoria} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <p>{categoria.nombre}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
};
