import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddressService from "../../services/AddressService";
import { Address } from "../../models/Address";

const emptyAddress: Address = {
  id: 0,
  street: "",
  city: "",
  state: "",
  postal_code: "",
  additional_info: "",
  order_id: 0,
};

const AddressForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState<Address>(emptyAddress);

  useEffect(() => {
    if (id) {
      AddressService.getById(Number(id)).then(setAddress);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await AddressService.update(Number(id), address);
    } else {
      await AddressService.create(address);
    }
    navigate("/direcciones");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar Dirección" : "Nueva Dirección"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="street" value={address.street} onChange={handleChange} placeholder="Calle" className="w-full p-2 border" />
        <input name="city" value={address.city} onChange={handleChange} placeholder="Ciudad" className="w-full p-2 border" />
        <input name="state" value={address.state} onChange={handleChange} placeholder="Estado" className="w-full p-2 border" />
        <input name="postal_code" value={address.postal_code} onChange={handleChange} placeholder="Código Postal" className="w-full p-2 border" />
        <input name="additional_info" value={address.additional_info} onChange={handleChange} placeholder="Info adicional" className="w-full p-2 border" />
        <input name="order_id" type="number" value={address.order_id} onChange={handleChange} placeholder="ID Orden" className="w-full p-2 border" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">{id ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
};

export default AddressForm;
