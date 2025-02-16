// src/components/templates/uis/CategoriaList.jsx
import React, { useEffect } from 'react';
import { useCategoriaStore } from '../../../store/categoriaStore';
import {CategoriaItem} from './CategoriaItem';

export const CategoriaList = () => {
  const { categorias, loading, fetchCategorias } = useCategoriaStore();

  useEffect(() => {
    fetchCategorias();
  }, [fetchCategorias]);

  if (loading) return <p>Cargando categorías...</p>;

  return (
    <div>
      <h3>Lista de Categorías</h3>
      {categorias.map((categoria) => (
        <CategoriaItem key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
};
