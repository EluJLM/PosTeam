
import { supabase } from './client';

export const getTiposDocumento = async () => {
  const { data, error } = await supabase.from('tipo_de_documento').select('*');
  if (error) throw error;
  return data;
};