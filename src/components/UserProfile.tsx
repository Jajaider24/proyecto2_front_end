import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const UserProfile: React.FC = () => {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  return (
    <div className="flex items-center">
      {auth.user ? (
        <>
          <img
            src={auth.user.picture}
            alt="Foto de Perfil"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span>{auth.user.name}</span>
          <button className="ml-4 text-red-500" onClick={auth.logout}>
            Cerrar Sesión
          </button>
        </>
      ) : (
        <span>No has iniciado sesión</span>
      )}
    </div>
  );
};

export default UserProfile;
