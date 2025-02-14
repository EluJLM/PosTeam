import { supabase } from '../supabase/client';

export const fetchCategorias = async () => {
  const { data, error } = await supabase.from('categoria').select('*');
  if (error) console.error('Error fetching categorias:', error);
  return data || [];
};

export const createCategoria = async (nombre) => {
  const { error } = await supabase.from('categoria').insert([{ nombre }]);
  if (error) console.error('Error creating categoria:', error);
};

export const updateCategoria = async (id, nombre) => {
  const { error } = await supabase.from('categoria').update({ nombre }).eq('id', id);
  if (error) console.error('Error updating categoria:', error);
};

export const deleteCategoria = async (id) => {
  const { error } = await supabase.from('categoria').delete().eq('id', id);
  if (error) console.error('Error deleting categoria:', error);
};