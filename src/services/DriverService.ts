// src/services/DriverService.ts
import { Driver } from "../models/Driver";
import axios from "axios";

const API_URL = "https://tuapi.com/api/customers";

export const getDrivers = () => axios.get<Driver[]>(API_URL);
export const getDriverById = (id: number) => axios.get<Driver>(`${API_URL}/${id}`);
export const createDriver = (data: Driver) => axios.post(API_URL, data);
export const updateDriver = (id: number, data: Driver) => axios.put(`${API_URL}/${id}`, data);
export const deleteDriver = (id: number) => axios.delete(`${API_URL}/${id}`);
