export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}
export interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  additional_info: string;
  order_id: number;
}
export interface Driver {
  id: number;
  name: string;
  license_number: string;
  phone: string;
  email: string;
  status: string;
}
export interface Issue {
  id: number;
  description: string;
  issue_type: string;
  date_reported: string;
  status: string;
  motorcycle_id: number;
}
export interface Menu {
  id: number;
  restaurant_id: number;
  product_id: number;
  price: number;
  availability: boolean;
}
export interface Motorcycle {
  id: number;
  license_plate: string;
  brand: string;
  year: number;
  status: string;
}
export interface Order {
  id: number;
  customer_id: number;
  menu_id: number;
  motorcycle_id: number;
  quantity: number;
  total_price: number;
  status: string;
}
export interface Photo {
  id: number;
  image_url: string;
  caption: string;
  taken_at: string;
  issue_id: number;
}
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}
export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
}
export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}
export interface Shift {
  id: number;
  start_time: string; // ISO string
  end_time: string;
  status: string;
  driver_id: number;
  motorcycle_id: number;
}