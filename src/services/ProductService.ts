// src/services/ProductService.ts
import { Product } from "../models/Product";
import axios from "axios";

const API_URL = "https://tuapi.com/api/customers";

export const getProducts = () => axios.get<Product[]>(API_URL);
export const getProdcutById = (id: number) => axios.get<Product>(`${API_URL}/${id}`);
export const createProduct = (data: Product) => axios.post(API_URL, data);
export const updateProduct = (id: number, data: Product) => axios.put(`${API_URL}/${id}`, data);
export const deleteProduct = (id: number) => axios.delete(`${API_URL}/${id}`);
