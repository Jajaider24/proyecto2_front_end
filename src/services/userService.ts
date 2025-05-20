import { User } from "../models/User";
import { apiService } from "./apiService";

const API_URL = "http://localhost:5000/users";

export const getUsers = () => apiService.get<User[]>(API_URL);
export const getUserById = (id: number) =>
  apiService.getById<User>(API_URL, id);
export const createUser = (data: User) =>
  apiService.create<User>(API_URL, data);
export const updateUser = (id: number, data: User) =>
  apiService.update<User>(API_URL, id, data);
export const deleteUser = (id: number) => apiService.delete(API_URL, id);
