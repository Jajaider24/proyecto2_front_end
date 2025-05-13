// src/routes/index.tsx
import { Routes, Route } from "react-router-dom";
import CustomerList from "../pages/Customer/CustomerList";
import CustomerForm from "../pages/Customer/CustomerForm";
import MainLayout from "../layouts/MainLayout";

export const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/clientes" element={<CustomerList />} />
      <Route path="/clientes/nuevo" element={<CustomerForm />} />
      {/* Lo mismo para otras entidades */}
    </Routes>
  </MainLayout>
);
