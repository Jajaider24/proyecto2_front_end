// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId="TU_CLIENT_ID_DE_GOOGLE">
    <App />
  </GoogleOAuthProvider>
);
