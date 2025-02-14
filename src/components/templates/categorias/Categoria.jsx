import React, { useEffect, useState } from 'react';
import { CategoriaStore } from './../../../store/categoriaStore';

export const Categoria = () => {
  const { categorias, loadCategorias, addCategoria, removeCategoria, updateCategoria } = CategoriaStore();
  const [nombre, setNombre] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadCategorias();
  }, [loadCategorias]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateCategoria(editId, nombre);
    } else {
      await addCategoria(nombre);
    }
    setNombre('');
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await removeCategoria(id);
  };

  const handleEdit = (categoria) => {
    setNombre(categoria.nombre);
    setEditId(categoria.id);
  };

  return (
    <div>
      <h1>CRUD de Categorías</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la categoría"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Actualizar' : 'Crear'}</button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.nombre}
            <button onClick={() => handleEdit(categoria)}>Editar</button>
            <button onClick={() => handleDelete(categoria.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
