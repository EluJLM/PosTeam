
import { create } from 'zustand';
import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
  searchProductos,
} from './../supabase/productoCrud';

// Store de Zustand para productos
const useProductoStore = create((set) => ({
  productos: [],
  loading: false,
  error: null,

  inicializarProductos: () => {
    set({ productos: [], loading: false, error: null });
  },
  fetchProductos: async (dt) => {
    set({ loading: true, error: null });
    try {
      const data = await searchProductos(dt);
      set({ productos: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  // Crear un producto
  addProducto: async (producto) => {
    set({ loading: true, error: null });
    try {
      await createProducto(producto);
      set((state) => ({ loading: false }));
      useProductoStore.getState().fetchProductos(); // Refrescar la lista
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Actualizar un producto
  editProducto: async (id, producto) => {
    set({ loading: true, error: null });
    try {
      await updateProducto(id, producto);
      set((state) => ({ loading: false }));
      useProductoStore.getState().fetchProductos(); // Refrescar la lista
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Eliminar un producto
  removeProducto: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteProducto(id);
      set((state) => ({ loading: false }));
      useProductoStore.getState().fetchProductos(); // Refrescar la lista
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useProductoStore;