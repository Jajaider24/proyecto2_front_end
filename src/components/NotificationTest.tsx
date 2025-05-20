// src/components/NotificationTest.tsx
import React from "react";
import { showNotification } from "../services/NotificationService";

const NotificationTest: React.FC = () => {
  const handleNewOrder = () => {
    showNotification("🚀 ¡Nuevo pedido asignado a un motociclista!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Test de Notificación</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleNewOrder}
      >
        Simular Nuevo Pedido
      </button>
    </div>
  );
};

export default NotificationTest;
