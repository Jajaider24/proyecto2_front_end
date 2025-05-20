import axios from "axios";
import type { Customer } from "../models/Customer";

// URL base del API (ajusta con tu URL de backend)
const API_URL = "http://localhost:5000/customers";

// Obtener todos los clientes
export const getAllCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get<Customer[]>(API_URL);
  return response.data;
};

// Obtener un cliente por su ID
export const getCustomerById = async (id: number): Promise<Customer> => {
  const response = await axios.get<Customer>(`${API_URL}/${id}`);
  return response.data;
};

// Crear un nuevo cliente
export const createCustomer = async (customer: Customer): Promise<Customer> => {
  const response = await axios.post<Customer>(API_URL, customer);
  return response.data;
};

// Actualizar un cliente
export const updateCustomer = async (
  id: number,
  customer: Customer
): Promise<Customer> => {
  const response = await axios.put<Customer>(`${API_URL}/${id}`, customer);
  return response.data;
};


// Eliminar un cliente
export const deleteCustomerById = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
