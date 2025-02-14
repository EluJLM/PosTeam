import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Cargar sesión desde localStorage al iniciar
  useEffect(() => {
    const loadUser = async () => {
      const storedSession = localStorage.getItem("session");
      if (storedSession) {
        setUser(JSON.parse(storedSession).user);
      }

      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        localStorage.setItem("session", JSON.stringify(data));
      } else {
        localStorage.removeItem("session");
      }

      setLoading(false);
    };

    loadUser();

    // 🔹 Escuchar cambios en la sesión
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        localStorage.setItem("session", JSON.stringify(session));
      } else {
        setUser(null);
        localStorage.removeItem("session");
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const userId = data.user.id;

    // 1️⃣ Verificar si el usuario ya existe en la tabla "usuarios"
    const { data: usuarioExistente, error: usuarioError } = await supabase
      .from("usuarios")
      .select("*")
      .eq("id", userId)
      .single();

    if (!usuarioExistente) {
      // 2️⃣ Crear una empresa con valores genéricos
      const { data: empresaData, error: empresaError } = await supabase
        .from("empresas")
        .insert([{ nombre: "Empresa de nuevo usuario", direccion: "Sin definir", telefono: "0000000000", nit: "2222222"}])
        .select()
        .single();

      if (empresaError) throw empresaError;

      const empresaId = empresaData.id;

      // 3️⃣ Registrar el usuario en la tabla "usuarios" vinculado a la empresa
      const { error: usuarioInsertError } = await supabase.from("usuarios").insert([
        {
          id: userId,
          nombre: "Nuevo Usuario",
          email,
          rol: "admin",
          empresa_id: empresaId,
        },
      ]);

      if (usuarioInsertError) throw usuarioInsertError;
    }

    // 4️⃣ Guardar usuario en el estado
    setUser(data.user);
    localStorage.setItem("session", JSON.stringify(data));
  };

  // 🔹 LOGOUT
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem("session");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
