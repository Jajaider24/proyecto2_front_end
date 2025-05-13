export interface User {
  id: string;
  name: string;
  email: string;
  role: "cliente" | "restaurante" | "repartidor" | "operador";
}
export interface UserLogin {
  email: string;
  password: string;
}