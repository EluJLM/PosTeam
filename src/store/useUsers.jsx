import { useState } from "react";
import { supabase } from "../supabase/client";

export function useUsers() {
  const [loading, setLoading] = useState(false);

  // 🔹 Obtener usuario por ID
  const getUserById = async (id) => {
    setLoading(true);
    const { data, error } = await supabase.from("usuarios").select("*").eq("id", id).single();
    setLoading(false);
    return { data, error };
  };

  // 🔹 Crear usuario si no existe
  const createUser = async (id, email) => {
    setLoading(true);
    const { error } = await supabase.from("usuarios").insert([
      {
        id,
        email,
        nombre: "Usuario Nuevo",
        rol: "usuario",
      },
    ]);
    setLoading(false);
    return error;
  };

  return { getUserById, createUser, loading };
}
