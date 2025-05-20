import axios from 'axios';
import { Order } from '../models/Order';

const API_URL = 'http://localhost:5000/orders'; // Ajusta la URL a tu backend

const getOrders = async (): Promise<Order[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getOrderById = async (id: number): Promise<Order> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createOrder = async (order: Omit<Order, 'id'>): Promise<Order> => {
  const response = await axios.post(API_URL, order);
  return response.data;
};

const updateOrder = async (id: number, order: Partial<Order>): Promise<Order> => {
  const response = await axios.put(`${API_URL}/${id}`, order);
  return response.data;
};

const deleteOrder = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

// ✅ Exportación por defecto agrupada
export default {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};



