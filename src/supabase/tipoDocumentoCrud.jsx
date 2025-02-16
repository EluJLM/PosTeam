// src/supabase/cruds/tipoDocumentoCrud.js
import { supabase } from '../../supabaseClient';

// Obtener todos los tipos de documento
export const getTiposDocumento = async () => {
  const { data, error } = await supabase.from('tipo_de_documento').select('*');
  if (error) throw error;
  return data;
};