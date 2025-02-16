import { create } from 'zustand';
import { getCategorias, createCategoria, updateCategoria, deleteCategoria } from '../supabase/categoriasCrud';

export const CategoriaStore = create((set) => ({
  categorias: [],
  // Obtener todas las categorías
  fetchCategorias: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getCategorias();
      set({ categorias: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Crear una categoría
  addCategoria: async (categoria) => {
    set({ loading: true, error: null });
    try {
      await createCategoria(categoria);
      set((state) => ({ loading: false }));
      CategoriaStore.getState().fetchCategorias(); // Refrescar la lista
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Actualizar una categoría
  editCategoria: async (id, categoria) => {
    set({ loading: true, error: null });
    try {
      await updateCategoria(id, categoria);
      set((state) => ({ loading: false }));
      CategoriaStore.getState().fetchCategorias(); // Refrescar la lista
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Eliminar una categoría
  removeCategoria: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteCategoria(id);
      set((state) => ({ loading: false }));
      CategoriaStore.getState().fetchCategorias(); 
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));