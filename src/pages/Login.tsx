import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../components/AuthProvider";
import { motion } from "framer-motion";
import { FaGithub, FaMicrosoft, FaGoogle } from "react-icons/fa";


const Login: React.FC = () => {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  // Configurar Client ID para GitHub y Microsoft
  const GITHUB_CLIENT_ID = "Ov23liO5aRdaJHowZOCU";
  const MICROSOFT_CLIENT_ID = "TU_CLIENT_ID_DE_MICROSOFT";
  const REDIRECT_URI = "http://localhost:3000/auth/callback"; // Ajusta según tu configuración

  // Función para iniciar sesión con GitHub
  const loginWithGitHub = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;
    window.location.href = githubAuthUrl;
  };

  // Función para iniciar sesión con Microsoft
  const loginWithMicrosoft = () => {
    const microsoftAuthUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${MICROSOFT_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&response_mode=query&scope=openid profile email`;
    window.location.href = microsoftAuthUrl;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Iniciar Sesión
        </h2>
        <div className="flex flex-col space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            <GoogleLogin
              onSuccess={(response) => auth.loginWithGoogle(response)}
              onError={() => console.log("Error al iniciar sesión con Google")}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
            onClick={loginWithGitHub}
          >
            <FaGithub className="mr-2" />
            Iniciar sesión con GitHub
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full p-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
            onClick={loginWithMicrosoft}
          >
            <FaMicrosoft className="mr-2" />
            Iniciar sesión con Microsoft
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
