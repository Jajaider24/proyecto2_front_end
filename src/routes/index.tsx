import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
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
import AuthCallback from "../pages/AuthCallBack";
import ChatBot from "../components/Chatbot";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rutas de Clientes */}
        <Route path="/clientes" element={<CustomerList />} />
        <Route path="/clientes/nuevo" element={<CustomerForm />} />
        <Route path="/clientes/:id/editar" element={<CustomerForm />} />

        {/* Rutas de Órdenes */}
        <Route path="/ordenes" element={<OrderList />} />
        <Route path="/ordenes/nueva" element={<OrderForm />} />
        <Route path="/ordenes/:id" element={<OrderDetail />} />
        <Route path="/ordenes/:id/editar" element={<OrderForm />} />

        {/* Rutas de Direcciones */}
        <Route path="/direcciones" element={<AddressList />} />
        <Route path="/direcciones/nueva" element={<AddressForm />} />
        <Route path="/direcciones/:id" element={<AddressDetail />} />
        <Route path="/direcciones/:id/editar" element={<AddressForm />} />

        {/* Rutas de Fotos */}
        <Route path="/fotos" element={<PhotoList />} />
        <Route path="/fotos/nueva" element={<PhotoForm />} />
        <Route path="/fotos/:id/editar" element={<PhotoForm />} />
        <Route path="/fotos/:id" element={<PhotoDetail />} />

        {/* Rutas de Incidencias */}
        <Route path="/issues" element={<IssueList />} />
        <Route path="/issues/nueva" element={<IssueForm />} />
        <Route path="/issues/:id" element={<IssueForm />} />
        <Route path="/issues/:id/detalles" element={<IssueDetail />} />

        {/* Rutas de Análisis */}
        <Route path="/analiticas" element={<Dashboard />} />

        {/* Rutas de Reportes */}
        <Route path="/reportes" element={<Reports />} />

        {/* Ruta de Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* Redirección en caso de ruta no encontrada */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
