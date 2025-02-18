
import { create } from 'zustand';
import { getMetodosPago } from '../supabase/metodoPagoCrud';

const useMetodoPagoStore = create((set) => ({
  metodosPago: [],
  loading: false,
  error: null,

  fetchMetodosPago: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getMetodosPago();
      set({ metodosPago: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useMetodoPagoStore;