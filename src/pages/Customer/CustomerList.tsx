import React, { useEffect, useState } from "react";
import {
  getAllCustomers,
  deleteCustomerById,
} from "../../services/CustomerService";
import type { Customer } from "../../models";
import { motion } from "framer-motion";

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await getAllCustomers();
      console.log("Respuesta del servicio:", response);
  
      // Verifica si la respuesta es un array
      if (Array.isArray(response)) {
        setCustomers(response);
        setError("");
      } else {
        console.error("La respuesta no es un arreglo de clientes:", response);
        throw new Error("La respuesta no es un arreglo de clientes.");
      }
    } catch (error: any) {
      console.error("Error al obtener los clientes:", error);
      setError(
        "No se pudo cargar el listado de clientes. Por favor, inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };
  

  const handleDelete = async (id: number) => {
    try {
      await deleteCustomerById(id);
      fetchCustomers();
      setConfirmDelete(null);
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
      setError(
        "No se pudo eliminar el cliente. Por favor, inténtalo nuevamente."
      );
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Listado de Clientes
      </h2>
      {loading ? (
        <div className="flex items-center justify-center h-40">
          <div className="loader"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-100 text-red-700 rounded-md text-center">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={fetchCustomers}
          >
            Reintentar
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Teléfono</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {customers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No hay clientes registrados.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-gray-100 transition"
                  >
                    <td className="px-4 py-2 border">{customer.name}</td>
                    <td className="px-4 py-2 border">{customer.email}</td>
                    <td className="px-4 py-2 border">{customer.phone}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        onClick={() => setConfirmDelete(customer.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal de confirmación de eliminación */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">¿Estás seguro?</h3>
            <p className="mb-4">¿Quieres eliminar este cliente?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setConfirmDelete(null)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(confirmDelete!)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerList;
