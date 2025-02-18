
import { create } from 'zustand';
import {
  createDetallesVenta,
  getDetallesVenta,
  updateDetalleVenta,
  deleteDetalleVenta,
} from '../supabase/detalleVentaCrud';

const useDetalleVentaStore = create((set) => ({
  detallesVenta: [],
  loading: false,
  error: null,

  fetchDetallesVenta: async (ventaId) => {
    set({ loading: true, error: null });
    try {
      const data = await getDetallesVenta(ventaId);
      set({ detallesVenta: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addDetallesVenta: async (detalles) => {
    set({ loading: true, error: null });
    try {
      await createDetallesVenta(detalles);
      set((state) => ({ loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  editDetalleVenta: async (id, detalle) => {
    set({ loading: true, error: null });
    try {
      await updateDetalleVenta(id, detalle);
      set((state) => ({
        detallesVenta: state.detallesVenta.map((d) => (d.id === id ? { ...d, ...detalle } : d)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  removeDetalleVenta: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteDetalleVenta(id);
      set((state) => ({
        detallesVenta: state.detallesVenta.filter((d) => d.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useDetalleVentaStore;