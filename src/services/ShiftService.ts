import { Shift } from "../models/Shift";
import { apiService } from "./apiService";

const API_URL = "http://localhost:5000/shifts";

export const getShifts = () => apiService.get<Shift[]>(API_URL);
export const getShiftById = (id: number) =>
  apiService.getById<Shift>(API_URL, id);
export const createShift = (data: Shift) =>
  apiService.create<Shift>(API_URL, data);
export const updateShift = (id: number, data: Shift) =>
  apiService.update<Shift>(API_URL, id, data);
export const deleteShift = (id: number) => apiService.delete(API_URL, id);
