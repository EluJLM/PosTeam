import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./../pages/Login";
import { Dashboard } from "./../pages/Dashboard";
import { Productos } from "./../pages/Productos";
import { routes } from "../utils/data";

import { ProtectedRoute } from "./../hooks/ProtectedRoute";
import { Vender } from "../pages/Vender";

export function MyRouters(){
    return(
        <Routes>
          <Route path="/" element={<Navigate to={routes.login} />} />
          <Route path={routes.login} element={<Login />} />
          <Route
            path={routes.dashboard}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.productos}
            element={
              <ProtectedRoute>
                <Productos />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.vender}
            element={
              <ProtectedRoute>
                <Vender />
              </ProtectedRoute>
            }
          />
          {/* Agregar una página 404 por si no encuentra la ruta */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
    )
}