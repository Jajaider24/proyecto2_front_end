// src/services/ShiftService.ts
import { Shift } from "../models/Shift";
import axios from "axios";

const API_URL = "https://tuapi.com/api/customers";

export const getShifts = () => axios.get<Shift[]>(API_URL);
export const getShiftById = (id: number) => axios.get<Shift>(`${API_URL}/${id}`);
export const createShift = (data: Shift) => axios.post(API_URL, data);
export const updateShift = (id: number, data: Shift) => axios.put(`${API_URL}/${id}`, data);
export const deleteShift = (id: number) => axios.delete(`${API_URL}/${id}`);
