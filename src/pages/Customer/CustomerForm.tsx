// src/pages/Customer/CustomerForm.tsx
import React, { useState } from "react";
import { Customer } from "../../models/Customer";
import { createCustomer } from "../../services/CustomerService";

const CustomerForm = () => {
  const [form, setForm] = useState<Customer>({
    id: 0,
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Nombre y correo son obligatorios.");
      return;
    }
    createCustomer(form)
      .then(() => alert("Cliente creado"))
      .catch((err) => alert("Error al crear cliente"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Registrar Cliente
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
