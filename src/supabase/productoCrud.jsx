
import { supabase } from './client';

export const getProductos = async () => {
  const { data, error } = await supabase.from('producto').select('*');
  if (error) throw error;
  return data;
};

export const searchProductos = async (searchTerm) => {
  const { data, error } = await supabase.rpc("search_productos", {
    search_term: searchTerm, 
  });
  if (error) {
    console.error("Error en la búsqueda:", error);
    throw error;
  }
  return data;
};


export const createProducto = async (producto) => {
  const { data, error } = await supabase.from('producto').insert([producto]);
  if (error) throw error;
  return data;
};

// Actualizar un producto
export const updateProducto = async (id, producto) => {
  const { data, error } = await supabase
    .from('producto')
    .update(producto)
    .eq('id', id);
  if (error) throw error;
  return data;
};

// Eliminar un producto
export const deleteProducto = async (id) => {
  const { error } = await supabase.from('producto').delete().eq('id', id);
  if (error) throw error;
};