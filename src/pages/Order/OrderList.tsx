// src/pages/OrderList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  showNotification,
  showErrorNotification,
} from "../../services/NotificationService";
import { Link } from "react-router-dom";
import { Order } from "../../models/Order";

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/orders");
      const fetchedOrders = response.data;

      if (Array.isArray(fetchedOrders)) {
        setOrders(fetchedOrders);
        setError("");

        // Notificar nuevos pedidos asignados
        fetchedOrders.forEach((order: any) => {
          if (order.assignedTo) {
            showNotification(
              `🚀 ¡Nuevo pedido asignado a ${order.assignedTo.name}!`
            );
          }
        });
      } else {
        throw new Error("La respuesta no es un arreglo de órdenes.");
      }
    } catch (err) {
      console.error("Error al obtener pedidos:", err);
      showErrorNotification("No se pudieron cargar las órdenes.");
      setError(
        "No se pudieron cargar las órdenes. Por favor, inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (id: number) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta orden?")) {
      try {
        await axios.delete(`http://localhost:5000/api/orders/${id}`);
        setOrders(orders.filter((order) => order.id !== id));
        showNotification("🚮 ¡Orden eliminada correctamente!");
      } catch (err) {
        console.error("Error al eliminar la orden:", err);
        showErrorNotification("No se pudo eliminar la orden.");
      }
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Cargando órdenes...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-center bg-red-100 text-red-700 rounded-md">
        <h2 className="text-xl font-bold mb-2">¡Error!</h2>
        <p>{error}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={fetchOrders}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Órdenes</h1>
      <Link
        to="/ordenes/nueva"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Crear Orden
      </Link>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Cliente</th>
              <th className="p-2 border">Menú</th>
              <th className="p-2 border">Moto</th>
              <th className="p-2 border">Cantidad</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Estado</th>
              <th className="p-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{order.id}</td>
                  <td className="p-2 border">{order.customer_id}</td>
                  <td className="p-2 border">{order.menu_id}</td>
                  <td className="p-2 border">{order.motorcycle_id}</td>
                  <td className="p-2 border">{order.quantity}</td>
                  <td className="p-2 border">${order.total_price}</td>
                  <td className="p-2 border">{order.status}</td>
                  <td className="p-2 border space-x-2">
                    <Link
                      to={`/ordenes/${order.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Ver
                    </Link>
                    <Link
                      to={`/ordenes/${order.id}/editar`}
                      className="text-green-600 hover:underline"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-4 text-center text-gray-600">
                  No hay órdenes disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
