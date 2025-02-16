import React, { useEffect, useState } from 'react';
import useProductoStore from '../../../store/productoStore';
import { useCategoriaStore } from '../../../store/categoriaStore';

export const ProductoForm = ({ producto, onClose }) => {
  const { addProducto, editProducto } = useProductoStore();
  const { categorias, fetchCategorias } = useCategoriaStore();
  
  const [nombre, setNombre] = useState(producto?.nombre || '');
  const [codigoBarra, setCodigoBarra] = useState(producto?.codigo_barra || '');
  const [precio, setPrecio] = useState(producto?.precio || 0);
  const [costo, setCosto] = useState(producto?.costo || 0);
  const [stock, setStock] = useState(producto?.stock || 0);
  const [categoriaId, setCategoriaId] = useState(producto?.categoria_id || '');

  useEffect(() => {
    fetchCategorias(); // Cargar categorías al montar el componente
  }, [fetchCategorias]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productoData = {
      nombre,
      codigo_barra: codigoBarra,
      precio,
      costo,
      stock,
      categoria_id: categoriaId,
    };

    if (producto?.id) {
      await editProducto(producto.id, productoData);
    } else {
      await addProducto(productoData);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Productos</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Código de barras"
        value={codigoBarra}
        onChange={(e) => setCodigoBarra(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(parseFloat(e.target.value))}
        required
      />
      <input
        type="number"
        placeholder="Costo"
        value={costo}
        onChange={(e) => setCosto(parseFloat(e.target.value))}
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(parseInt(e.target.value))}
        required
      />
      <select
        value={categoriaId}
        onChange={(e) => setCategoriaId(e.target.value)}
        required
      >
        <option value="">Seleccione una categoría</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nombre}
          </option>
        ))}
      </select>
      <button type="submit">{producto?.id ? 'Actualizar' : 'Crear'}</button>
      <button type="button" onClick={onClose}>
        Cancelar
      </button>
    </form>
  );
};