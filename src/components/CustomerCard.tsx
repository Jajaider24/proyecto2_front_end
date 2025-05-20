import React, { useEffect, useState } from "react";
import { getUserById } from "../services/userService";

interface User {
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(1); // Ajusta el ID según tu lógica
        setUser(userData);
      } catch (err) {
        setError("Error al cargar el usuario.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-2">Cargando usuario...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto text-red-600">
        <h2 className="text-2xl font-bold mb-2">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
      <p>
        <strong>Nombre:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  );
};

export default UserProfile;
