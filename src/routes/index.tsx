// src/routes/index.tsx
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import CustomerList from "../pages/Customer/CustomerList";
import CustomerForm from "../pages/Customer/CustomerForm";
import Reports from "../pages/Reports";
import Dashboard from "../pages/Analytics/Dashboard";
import IssueDetail from "../pages/Issue/IssueDetail";
import IssueForm from "../pages/Issue/IssueForm";
import IssueList from "../pages/Issue/IssueList";
import PhotoDetail from "../pages/Photo/PhotoDetail";
import PhotoForm from "../pages/Photo/PhotoForm";
import PhotoList from "../pages/Photo/PhotoList";
import AddressForm from "../pages/Address/AddressForm";
import AddressDetail from "../pages/Address/AddressDetail";
import AddressList from "../pages/Address/AddressList";
import OrderForm from "../pages/Order/OrderForm";
import OrderDetail from "../pages/Order/OrderDetail";
import OrderList from "../pages/Order/OrderList";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<CustomerList />} />
        <Route path="/clientes/nuevo" element={<CustomerForm />} />
        <Route path="/clientes/:id/editar" element={<CustomerForm />} />

        <Route path="/ordenes" element={<OrderList />} />
        <Route path="/ordenes/nueva" element={<OrderForm />} />
        <Route path="/ordenes/:id" element={<OrderDetail />} />
        <Route path="/ordenes/:id/editar" element={<OrderForm />} />

        <Route path="/direcciones" element={<AddressList />} />
        <Route path="/direcciones/nueva" element={<AddressForm />} />
        <Route path="/direcciones/:id" element={<AddressDetail />} />
        <Route path="/direcciones/:id/editar" element={<AddressForm />} />

        <Route path="/fotos" element={<PhotoList />} />
        <Route path="/fotos/nueva" element={<PhotoForm />} />
        <Route path="/fotos/:id/editar" element={<PhotoForm />} />
        <Route path="/fotos/:id" element={<PhotoDetail />} />

        <Route path="/issues" element={<IssueList />} />
        <Route path="/issues/nueva" element={<IssueForm />} />
        <Route path="/issues/:id" element={<IssueForm />} />
        <Route path="/issues/:id/detalles" element={<IssueDetail />} />

        <Route path="/analiticas" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/nuevo" element={<CustomerForm />} />
        <Route path="/customers/editar/:id" element={<CustomerForm />} />
        <Route path="/reportes" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
