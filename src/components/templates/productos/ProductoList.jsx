
import React, { useEffect } from 'react';
import useProductoStore from './../../../store/productoStore';
import {ProductoItem} from './ProductoItem';

export const ProductoList = () => {
  const { productos, loading, fetchProductos } = useProductoStore();

  useEffect(() => {
    fetchProductos();
  }, [fetchProductos]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <ProductoItem key={producto.id} producto={producto} />
      ))}
    </div>
  );
};