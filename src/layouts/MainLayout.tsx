// src/layouts/MainLayout.tsx
import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [user] = useState({ name: "Usuario Demo" });

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
        className="bg-blue-700 text-white w-full md:w-64 p-4"
        aria-label="Menú de navegación"
      >
        <h2 className="text-2xl font-bold mb-4">MotoDomicilios</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="hover:bg-blue-600 p-2 rounded">
            Inicio
          </Link>
          <Link to="/pedidos" className="hover:bg-blue-600 p-2 rounded">
            Pedidos
          </Link>
          <Link to="/perfil" className="hover:bg-blue-600 p-2 rounded">
            Perfil
          </Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-4 bg-gray-100">
        {/* Navbar superior */}
        <header className="bg-white shadow p-4 rounded mb-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Panel de usuario</span>
          <span className="text-sm text-gray-600">Bienvenido, {user.name}</span>
        </header>

        {/* Contenido dinámico de la página */}
        <section>{children}</section>
      </main>
    </div>
  );
};

export default MainLayout;
