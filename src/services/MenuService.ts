import { Menu } from "../models/Menu";
import { apiService } from "./apiService";

const API_URL = "menus";

export const getMenus = () => apiService.get<Menu[]>(API_URL);
export const getMenuById = (id: number) =>
  apiService.getById<Menu>(API_URL, id);
export const createMenu = (data: Menu) =>
  apiService.create<Menu>(API_URL, data);
export const updateMenu = (id: number, data: Menu) =>
  apiService.update<Menu>(API_URL, id, data);
export const deleteMenu = (id: number) => apiService.delete(API_URL, id);
