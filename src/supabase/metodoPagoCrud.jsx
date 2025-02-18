
import { supabase } from './client';

export const getMetodosPago = async () => {
  const { data, error } = await supabase.from('metodos_de_pago').select('*');
  if (error) throw error;
  return data;
};

export const createMetodoPago = async (metodoPago) => {
  const { data, error } = await supabase.from('metodos_de_pago').insert([metodoPago]);
  if (error) throw error;
  return data;
};

export const updateMetodoPago = async (id, metodoPago) => {
  const { data, error } = await supabase
    .from('metodos_de_pago')
    .update(metodoPago)
    .eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteMetodoPago = async (id) => {
  const { error } = await supabase.from('metodos_de_pago').delete().eq('id', id);
  if (error) throw error;
};