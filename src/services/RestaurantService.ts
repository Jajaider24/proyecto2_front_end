// src/services/RestaurantService.ts
import { Restaurant } from "../models/Restaurant";
import axios from "axios";

const API_URL = "https://tuapi.com/api/customers";

export const getRestaurants = () => axios.get<Restaurant[]>(API_URL);
export const getRestaurantById = (id: number) => axios.get<Restaurant>(`${API_URL}/${id}`);
export const createRestaurant = (data: Restaurant) => axios.post(API_URL, data);
export const updateRestaurant = (id: number, data: Restaurant) => axios.put(`${API_URL}/${id}`, data);
export const deleteRestaurant = (id: number) => axios.delete(`${API_URL}/${id}`);
