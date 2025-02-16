
import { create } from 'zustand';
import { getTiposDocumento } from '../supabase/tipoDocumentoCrud';

const useTipoDocumentoStore = create((set) => ({
  tiposDocumento: [],
  loading: false,
  error: null,

  fetchTiposDocumento: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getTiposDocumento();
      set({ tiposDocumento: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useTipoDocumentoStore;