import axios from "axios";
import { Photo } from "../models/Photo";

const API_URL = "http://localhost:3000/photos"; // Ajusta la URL según tu backend

const PhotoService = {
  getAll: async (): Promise<Photo[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getById: async (id: number): Promise<Photo> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  create: async (photo: Omit<Photo, "id">): Promise<Photo> => {
    const response = await axios.post(API_URL, photo);
    return response.data;
  },

  update: async (id: number, photo: Partial<Photo>): Promise<Photo> => {
    const response = await axios.put(`${API_URL}/${id}`, photo);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};

export default PhotoService;
