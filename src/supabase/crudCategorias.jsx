// src/components/CategoriaCrud.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from './client';

export const CrudCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState('');
  const [editId, setEditId] = useState(null);

  // Obtener todas las categorías
  const fetchCategorias = async () => {
    const { data, error } = await supabase.from('categoria').select('*');
    if (error) console.error('Error fetching categorias:', error);
    else setCategorias(data);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  // Crear o actualizar una categoría
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // Actualizar categoría
      const { error } = await supabase
        .from('categoria')
        .update({ nombre })
        .eq('id', editId);
      if (error) console.error('Error updating categoria:', error);
    } else {
      // Crear nueva categoría
      const { error } = await supabase.from('categoria').insert([{ nombre }]);
      if (error) console.error('Error creating categoria:', error);
    }
    setNombre('');
    setEditId(null);
    fetchCategorias();
  };

  // Eliminar una categoría
  const handleDelete = async (id) => {
    const { error } = await supabase.from('categoria').delete().eq('id', id);
    if (error) console.error('Error deleting categoria:', error);
    fetchCategorias();
  };

  // Editar una categoría
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