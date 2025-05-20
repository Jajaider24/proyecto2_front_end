// src/components/NotificationTest.tsx
import React from "react";
import { showNotification } from "../services/NotificationService";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";

const NotificationTest: React.FC = () => {
  const handleNewOrder = () => {
    showNotification("🚀 ¡Nuevo pedido asignado a un motociclista!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-8 text-center w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <FaBell className="text-blue-500" />
          Simulador de Notificación
        </h2>
        <p className="text-gray-600 mb-6">
          Presiona el botón para simular un nuevo pedido asignado a un
          motociclista.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleNewOrder}
        >
          🚨 Simular Nuevo Pedido
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotificationTest;
