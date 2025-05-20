// src/pages/Customer/CustomerForm.tsx
import React, { useState, useEffect } from "react";
import { Customer } from "../../models";
import {
  createCustomer,
  getCustomerById,
  updateCustomer,
} from "../../services/CustomerService";
import { useParams, useNavigate } from "react-router-dom";

const CustomerForm = () => {
  const [form, setForm] = useState<Customer>({
    id: 0,
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getCustomerById(Number(id)).then(setForm);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Nombre y correo son obligatorios.");
      return;
    }

    try {
      if (id) {
        await updateCustomer(Number(id), form);
        alert("Cliente actualizado");
      } else {
        await createCustomer(form);
        alert("Cliente creado");
      }
      navigate("/clientes");
    } catch {
      setError("Error al guardar cliente.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {id ? "Editar Cliente" : "Registrar Cliente"}
        </h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre completo"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Teléfono"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
