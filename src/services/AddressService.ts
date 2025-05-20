import axios from 'axios';
import { Address } from '../models/Address';

const API_URL = "http://localhost:5000/addresses"; // Ajusta si tu backend usa otro endpoint

const AddressService = {
  getAll: async (): Promise<Address[]> => {
    const res = await axios.get(API_URL);
    return res.data;
  },
  getById: async (id: number): Promise<Address> => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  },
  create: async (address: Omit<Address, 'id'>): Promise<Address> => {
    const res = await axios.post(API_URL, address);
    return res.data;
  },
  update: async (id: number, address: Partial<Address>): Promise<Address> => {
    const res = await axios.put(`${API_URL}/${id}`, address);
    return res.data;
  },
  remove: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};

export default AddressService;
