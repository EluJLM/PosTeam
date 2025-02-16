
import React, { useState } from 'react';
import {useCategoriaStore} from '../../../store/categoriaStore';

export const CategoriaForm = ({ categoria, onClose }) => {
  const { addCategoria, editCategoria } = useCategoriaStore();
  const [nombre, setNombre] = useState(categoria?.nombre || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (categoria?.id) {
      await editCategoria(categoria.id, nombre); // Editar categoría
    } else {
      await addCategoria(nombre); // Crear categoría
    }
    setNombre("");
    onClose(); // Cerrar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la categoría"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <button type="submit">{categoria?.id ? 'Actualizar' : 'Crear'}</button>
      <button type="button" onClick={onClose}>
        Cancelar
      </button>
    </form>
  );
};
