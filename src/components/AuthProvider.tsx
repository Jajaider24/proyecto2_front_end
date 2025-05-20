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

  const fetchUserProfile = async (token: string) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      logout();
    }
  };

  const loginWithGoogle = (response: any) => {
    const token = response.credential;
    setAuthToken(token);
    localStorage.setItem("authToken", token);
    fetchUserProfile(token);
  };

  const logout = () => {
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
