// src/App.tsx
import React from "react";
import AuthProvider from "./components/AuthProvider";
import AppRoutes from "./routes";
import UserProfile from "./components/UserProfile";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <UserProfile />
        <AppRoutes />
        <ToastContainer />
      </ErrorBoundary>
    </AuthProvider>
  );
};

export default App;
