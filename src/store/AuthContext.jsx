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
    setUser(data.user);
    localStorage.setItem("session", JSON.stringify(data));
  };

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
