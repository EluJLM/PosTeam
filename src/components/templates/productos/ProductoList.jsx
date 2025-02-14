
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
      <h3>Lista de Productos</h3>
      {productos.map((producto) => (
        <ProductoItem key={producto.id} producto={producto} />
      ))}
    </div>
  );
};