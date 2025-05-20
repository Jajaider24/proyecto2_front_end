// src/services/apiService.ts
import axios, { AxiosResponse } from "axios";

// Configuración básica de Axios
const axiosInstance = axios.create({
  baseURL: "https://tuapi.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Función genérica para CRUD
export const apiService = {
  get: async <T>(url: string): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.get(url);
    return response.data;
  },
  getById: async <T>(url: string, id: number): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.get(`${url}/${id}`);
    return response.data;
  },
  create: async <T>(url: string, data: T): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.post(url, data);
    return response.data;
  },
  update: async <T>(url: string, id: number, data: T): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.put(
      `${url}/${id}`,
      data
    );
    return response.data;
  },
  delete: async (url: string, id: number): Promise<void> => {
    await axiosInstance.delete(`${url}/${id}`);
  },
};
