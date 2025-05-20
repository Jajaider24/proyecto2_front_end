import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId="15361636382-21j7s217a4v3u6atb3hlp9lviia4e2ns.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
