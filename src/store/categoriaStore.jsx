import { create } from 'zustand';
import { fetchCategorias, createCategoria, updateCategoria, deleteCategoria } from '../supabase/categoriasCrud';

export const CategoriaStore = create((set) => ({
  categorias: [],
  loadCategorias: async () => {
    const categorias = await fetchCategorias();
    set({ categorias });
  },
  addCategoria: async (nombre) => {
    await createCategoria(nombre);
    const categorias = await fetchCategorias();
    set({ categorias });
  },
  updateCategoria: async (id, nombre) => {
    await updateCategoria(id, nombre);
    const categorias = await fetchCategorias();
    set({ categorias });
  },
  removeCategoria: async (id) => {
    await deleteCategoria(id);
    const categorias = await fetchCategorias();
    set({ categorias });
  },
}));