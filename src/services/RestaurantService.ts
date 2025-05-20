import { Restaurant } from "../models/Restaurant";
import { apiService } from "./apiService";

const API_URL = "restaurants";

export const getRestaurants = () => apiService.get<Restaurant[]>(API_URL);
export const getRestaurantById = (id: number) =>
  apiService.getById<Restaurant>(API_URL, id);
export const createRestaurant = (data: Restaurant) =>
  apiService.create<Restaurant>(API_URL, data);
export const updateRestaurant = (id: number, data: Restaurant) =>
  apiService.update<Restaurant>(API_URL, id, data);
export const deleteRestaurant = (id: number) => apiService.delete(API_URL, id);
