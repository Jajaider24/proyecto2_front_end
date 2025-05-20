// src/components/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute: React.FC = () => {
  const auth = useContext(AuthContext);

  if (!auth?.user) {
    // Si no hay usuario autenticado, redirigir al login
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, renderizar las rutas protegidas
  return <Outlet />;
};

export default ProtectedRoute;
