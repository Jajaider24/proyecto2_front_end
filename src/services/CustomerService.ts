// src/services/CustomerService.ts
import { Customer } from "../models/Customer";
import axios from "axios";

const API_URL = "https://tuapi.com/api/customers";

export const getCustomers = () => axios.get<Customer[]>(API_URL);
export const getCustomerById = (id: number) =>
  axios.get<Customer>(`${API_URL}/${id}`);
export const createCustomer = (data: Customer) => axios.post(API_URL, data);
export const updateCustomer = (id: number, data: Customer) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteCustomer = (id: number) => axios.delete(`${API_URL}/${id}`);


export const getAllCustomers = async (): Promise<Customer[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteCustomerById = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
