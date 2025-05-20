import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AddressService from "../../services/AddressService";
import { Address } from "../../models/Address";

const AddressDetail = () => {
  const { id } = useParams();
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    if (id) {
      AddressService.getById(Number(id)).then(setAddress);
    }
  }, [id]);

  if (!address) return <div className="p-6">Cargando...</div>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Detalle de Dirección</h1>
      <ul className="space-y-2">
        <li><strong>Calle:</strong> {address.street}</li>
        <li><strong>Ciudad:</strong> {address.city}</li>
        <li><strong>Estado:</strong> {address.state}</li>
        <li><strong>Código Postal:</strong> {address.postal_code}</li>
        <li><strong>Info adicional:</strong> {address.additional_info}</li>
        <li><strong>ID de Orden:</strong> {address.order_id}</li>
      </ul>
      <Link to="/direcciones" className="block mt-4 text-blue-500 hover:underline">Volver</Link>
    </div>
  );
};

export default AddressDetail;
