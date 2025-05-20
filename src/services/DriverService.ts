import { Driver } from "../models/Driver";
import { apiService } from "./apiService";

const API_URL = "drivers";

export const getDrivers = () => apiService.get<Driver[]>(API_URL);
export const getDriverById = (id: number) =>
  apiService.getById<Driver>(API_URL, id);
export const createDriver = (data: Driver) =>
  apiService.create<Driver>(API_URL, data);
export const updateDriver = (id: number, data: Driver) =>
  apiService.update<Driver>(API_URL, id, data);
export const deleteDriver = (id: number) => apiService.delete(API_URL, id);
