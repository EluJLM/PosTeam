
import { create } from 'zustand';
import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} from './../supabase/productoCrud';

// Store de Zustand para productos
const useProductoStore = create((set) => ({
  productos: [],
  loading: false,
  error: null,

  // Obtener todos los productos
  fetchProductos: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getProductos();
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