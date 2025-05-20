import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Address } from "../../models/Address";
import AddressService from "../../services/AddressService";

const AddressList = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    AddressService.getAll().then(setAddresses);
  }, []);

  const handleDelete = async (id: number) => {
    await AddressService.remove(id);
    setAddresses(addresses.filter(address => address.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Direcciones</h1>
      <Link to="/direcciones/nueva" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Crear Dirección
      </Link>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Calle</th>
            <th className="p-2 border">Ciudad</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Código Postal</th>
            <th className="p-2 border">Información Adicional</th>
            <th className="p-2 border">Orden ID</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map(address => (
            <tr key={address.id}>
              <td className="p-2 border">{address.id}</td>
              <td className="p-2 border">{address.street}</td>
              <td className="p-2 border">{address.city}</td>
              <td className="p-2 border">{address.state}</td>
              <td className="p-2 border">{address.postal_code}</td>
              <td className="p-2 border">{address.additional_info}</td>
              <td className="p-2 border">{address.order_id}</td>
              <td className="p-2 border space-x-2">
                <Link to={`/direcciones/${address.id}`} className="text-blue-600 hover:underline">Ver</Link>
                <Link to={`/direcciones/${address.id}/editar`} className="text-green-600 hover:underline">Editar</Link>
                <button onClick={() => handleDelete(address.id)} className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddressList;
