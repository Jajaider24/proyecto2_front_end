// src/services/MenuService.ts
import { Menu } from "../models/Menu";
import axios from "axios";

const API_URL = "https://tuapi.com/api/customers";

export const getMenus = () => axios.get<Menu[]>(API_URL);
export const getMenuById = (id: number) => axios.get<Menu>(`${API_URL}/${id}`);
export const createMenu = (data: Menu) => axios.post(API_URL, data);
export const updateMenu = (id: number, data: Menu) => axios.put(`${API_URL}/${id}`, data);
export const deleteShift = (id: number) => axios.delete(`${API_URL}/${id}`);
