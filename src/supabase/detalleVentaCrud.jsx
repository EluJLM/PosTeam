import { supabase } from './client';
const tabla = 'detalles_de_ventas'
export const createDetallesVenta = async (detalles) => {
  const { data, error } = await supabase.from(tabla).insert(detalles);
  if (error) throw error;
  return data;
};

export const getDetallesVenta = async (ventaId) => {
  const { data, error } = await supabase
    .from(tabla)
    .select('*')
    .eq('venta_id', ventaId);
  if (error) throw error;
  return data;
};

export const updateDetalleVenta = async (id, detalle) => {
  const { data, error } = await supabase
    .from(tabla)
    .update(detalle)
    .eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteDetalleVenta = async (id) => {
  const { error } = await supabase.from(tabla).delete().eq('id', id);
  if (error) throw error;
};