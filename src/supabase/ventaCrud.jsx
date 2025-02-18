// src/supabase/cruds/ventaCrud.js
import { supabase } from './client';

export const createVenta = async (venta) => {
  const { data, error } = await supabase.from('ventas').insert([venta]).select();
  if (error) throw error;
  return data[0];
};

export const getVentas = async () => {
  const { data, error } = await supabase.from('ventas').select('*');
  if (error) throw error;
  return data;
};

export const updateVenta = async (id, venta) => {
  const { data, error } = await supabase
    .from('ventas')
    .update(venta)
    .eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteVenta = async (id) => {
  const { error } = await supabase.from('ventas').delete().eq('id', id);
  if (error) throw error;
};