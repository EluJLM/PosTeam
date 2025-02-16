
import { useModalStore } from '../components/modal/useModalStore';
import { supabase } from './client';

export const getClientes = async () => {
  const { data, error } = await supabase.from('clientes').select('*');
  if (error) throw error;
  return data;
};

export const createCliente = async (cliente) => {
  const { data, error } = await supabase.from('clientes').insert([cliente]);
  if (error) {
      console.error('Error deleting categoria:', error);
      useModalStore.getState().openModal("Error" ,error.details);
    }
  return data;
};

export const updateCliente = async (id, cliente) => {
  const { data, error } = await supabase
    .from('clientes')
    .update(cliente)
    .eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteCliente = async (id) => {
  const { error } = await supabase.from('clientes').delete().eq('id', id);
  if (error) throw error;
};