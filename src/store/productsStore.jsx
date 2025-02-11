import { create } from "zustand";
import { supabase } from "../supabase/client";

export const useProductsStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const { data, error } = await supabase.from("productos").select("*");
    if (error) throw error;
    set({ products: data });
  },
}));
