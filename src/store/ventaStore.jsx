
import { create } from 'zustand';
import { createVenta, getVentas, updateVenta, deleteVenta } from '../supabase/ventaCrud';

const useVentaStore = create((set) => ({
  ventas: {},
  loading: false,
  error: null,

  fetchVentas: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getVentas();
      set({ ventas: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addVenta: async (venta) => {
    set({ loading: true, error: null });
    try {
      const nuevaVenta = await createVenta(venta);
      set((state) => ({ ventas: nuevaVenta, loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  editVenta: async (id, venta) => {
    set({ loading: true, error: null });
    try {
      await updateVenta(id, venta);
      set((state) => ({
        ventas: state.ventas.map((v) => (v.id === id ? { ...v, ...venta } : v)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  removeVenta: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteVenta(id);
      set((state) => ({
        ventas: state.ventas.filter((v) => v.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useVentaStore;