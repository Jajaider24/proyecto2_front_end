import axios from "axios";

// URL de tu backend (ajusta según tu servidor)
const BACKEND_API_URL = "http://localhost:5000";

// Guardar Token en LocalStorage
export const setAuthToken = (token: string) => {
  localStorage.setItem("authToken", token);
};

// Obtener Token desde LocalStorage
export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// Eliminar Token de LocalStorage (Cerrar Sesión)
export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};

// Configurar Axios para enviar el Token en todas las peticiones
axios.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
