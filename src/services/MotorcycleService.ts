import { Motorcycle } from "../models/Motorcycle";
import { apiService } from "./apiService";

const API_URL = "http://localhost:5000/motorcycles";

export const getMotorcycles = () => apiService.get<Motorcycle[]>(API_URL);
export const getMotorcycleById = (id: number) =>
  apiService.getById<Motorcycle>(API_URL, id);
export const createMotorcycle = (data: Motorcycle) =>
  apiService.create<Motorcycle>(API_URL, data);
export const updateMotorcycle = (id: number, data: Motorcycle) =>
  apiService.update<Motorcycle>(API_URL, id, data);
export const deleteMotorcycle = (id: number) => apiService.delete(API_URL, id);
