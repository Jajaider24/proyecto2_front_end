// src/services/MotorcycleService.ts
import { Motorcycle } from "../models/Motorcycle";
import axios from "axios";

const API_URL = "https://tuapi.com/api/customers";

export const getMotorcycles = () => axios.get<Motorcycle[]>(API_URL);
export const getMotorcycleById = (id: number) => axios.get<Motorcycle>(`${API_URL}/${id}`);
export const createMotorcycle = (data: Motorcycle) => axios.post(API_URL, data);
export const updateMotorcycle = (id: number, data: Motorcycle) => axios.put(`${API_URL}/${id}`, data);
export const deleteMotorcycle = (id: number) => axios.delete(`${API_URL}/${id}`);
