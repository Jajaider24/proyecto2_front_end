// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 4000); // Redirige automáticamente después de 4 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center"
      >
        {loading ? (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              ¡Bienvenido!
            </h1>
            <p className="text-gray-600 mb-4">Cargando...</p>
            {/* Círculo de carga animado */}
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              ¡Bienvenido!
            </h1>
            <p className="text-gray-600 mb-6">
              Gestiona tus clientes de manera sencilla y eficiente.
            </p>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Iniciar Sesión
              </motion.button>
            </Link>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
