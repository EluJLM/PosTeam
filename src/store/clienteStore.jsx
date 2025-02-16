
import { create } from 'zustand';
import {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
} from '../supabase/clienteCrud';

const useClienteStore = create((set) => ({
  clientes: [],
  loading: false,
  error: null,

  fetchClientes: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getClientes();
      set({ clientes: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addCliente: async (cliente) => {
    set({ loading: true, error: null });
    try {
      await createCliente(cliente);
      set((state) => ({ loading: false }));
      useClienteStore.getState().fetchClientes();
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  editCliente: async (id, cliente) => {
    set({ loading: true, error: null });
    try {
      await updateCliente(id, cliente);
      set((state) => ({ loading: false }));
      useClienteStore.getState().fetchClientes();
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Eliminar un cliente
  removeCliente: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteCliente(id);
      set((state) => ({ loading: false }));
      useClienteStore.getState().fetchClientes(); // Refrescar la lista
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useClienteStore;