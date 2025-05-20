import React, { useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../components/AuthProvider";

const AuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const code = searchParams.get("code");
    const provider = searchParams.get("provider");

    if (code) {
      fetchAccessToken(code, provider || "github");
    }
  }, []);

  const fetchAccessToken = async (code: string, provider: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/auth/${provider}/callback?code=${code}`
      );

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      auth?.loginWithGoogle({ credential: token });
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      navigate("/login");
    }
  };
  

  return <div>Cargando...</div>;
};

export default AuthCallback;
