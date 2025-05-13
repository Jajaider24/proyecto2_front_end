// src/pages/Customer/CustomerList.tsx
import React, { useEffect, useState } from "react";
import { Customer } from "../../models/Customer";
import {
  getAllCustomers,
  deleteCustomerById,
} from "../../services/CustomerService";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const data = await getAllCustomers();
      setCustomers(data);
    } catch (error) {
      console.error("Error cargando clientes:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Estás seguro de eliminar este cliente?")) {
      try {
        await deleteCustomerById(id);
        loadCustomers();
      } catch (error) {
        console.error("Error al eliminar cliente:", error);
      }
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/clientes/editar/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="overflow-x-auto">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
          <h2 className="text-2xl font-semibold text-center text-gray-800 py-4">
            Lista de Clientes
          </h2>
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Nombre</th>
                <th className="px-4 py-3 text-left">Correo</th>
                <th className="px-4 py-3 text-left">Teléfono</th>
                <th className="px-4 py-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{customer.id}</td>
                  <td className="px-4 py-2">{customer.name}</td>
                  <td className="px-4 py-2">{customer.email}</td>
                  <td className="px-4 py-2">{customer.phone}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(customer.id)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              {customers.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No hay clientes registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
