// src/components/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth?.user) {
    // Si no hay usuario autenticado, redirigir al login
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, renderizar la ruta protegida
  return <>{children}</>;
};

export default ProtectedRoute;
