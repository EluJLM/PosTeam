
import React, { useEffect, useState } from 'react';
import { supabase } from './client';

export const CrudProducto = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState('');
  const [codigoBarra, setCodigoBarra] = useState('');
  const [precio, setPrecio] = useState(0);
  const [costo, setCosto] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoriaId, setCategoriaId] = useState('');
  const [editId, setEditId] = useState(null);

  // Obtener todos los productos y categorías
  const fetchData = async () => {
    const { data: productosData, error: productosError } = await supabase
      .from('producto')
      .select('*');
    const { data: categoriasData, error: categoriasError } = await supabase
      .from('categoria')
      .select('*');

    if (productosError) console.error('Error fetching productos:', productosError);
    if (categoriasError) console.error('Error fetching categorias:', categoriasError);

    setProductos(productosData || []);
    setCategorias(categoriasData || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Crear o actualizar un producto
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

    if (editId) {
      // Actualizar producto
      const { error } = await supabase
        .from('producto')
        .update(productoData)
        .eq('id', editId);
      if (error) console.error('Error updating producto:', error);
    } else {
      // Crear nuevo producto
      const { error } = await supabase.from('producto').insert([productoData]);
      if (error) console.error('Error creating producto:', error);
    }

    setNombre('');
    setCodigoBarra('');
    setPrecio(0);
    setCosto(0);
    setStock(0);
    setCategoriaId('');
    setEditId(null);
    fetchData();
  };

  // Eliminar un producto
  const handleDelete = async (id) => {
    const { error } = await supabase.from('producto').delete().eq('id', id);
    if (error) console.error('Error deleting producto:', error);
    fetchData();
  };

  // Editar un producto
  const handleEdit = (producto) => {
    setNombre(producto.nombre);
    setCodigoBarra(producto.codigo_barra);
    setPrecio(producto.precio);
    setCosto(producto.costo);
    setStock(producto.stock);
    setCategoriaId(producto.categoria_id);
    setEditId(producto.id);
  };

  return (
    <div>
      <h1>CRUD de Productos</h1>
      <form onSubmit={handleSubmit}>
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
          required
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
        <button type="submit">{editId ? 'Actualizar' : 'Crear'}</button>
      </form>

      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio} - Stock: {producto.stock}
            <button onClick={() => handleEdit(producto)}>Editar</button>
            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
