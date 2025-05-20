import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { setAuthToken, removeAuthToken } from "../services/AuthService";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface AuthContextType {
  user: any;
  loginWithGoogle: (response: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setAuthToken(storedToken);
      fetchUserProfile(storedToken);
    }
  }, []);

  // ✅ Utiliza el ID Token de Google directamente
  const loginWithGoogle = async (response: any) => {
    try {
      const idToken = response.credential;
      console.log("Recibido Token de Google:", idToken);

      // Guardar el ID Token directamente como token de autenticación
      localStorage.setItem("authToken", idToken);
      setAuthToken(idToken);

      // Obtener el perfil del usuario con el ID Token
      await fetchUserProfile(idToken);
    } catch (error) {
      console.error("Error en el login con Google:", error);
      logout();
    }
  };

  // ✅ Obtiene el perfil del usuario utilizando el ID Token
  const fetchUserProfile = async (idToken: string) => {
    try {
      console.log("Obteniendo perfil del usuario con el ID Token...");

      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      console.log("Perfil del usuario:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      logout();
    }
  };

  const logout = () => {
    console.log("Cerrando sesión...");
    removeAuthToken();
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <GoogleOAuthProvider clientId="15361636382-21j7s217a4v3u6atb3hlp9lviia4e2ns.apps.googleusercontent.com">
      <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};

export default AuthProvider;
