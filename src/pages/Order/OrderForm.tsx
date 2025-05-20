import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderService from "../../services/OrderService";
import { Order } from "../../models/Order";

const emptyOrder: Order = {
  id: 0,
  customer_id: 0,
  menu_id: 0,
  motorcycle_id: 0,
  quantity: 1,
  total_price: 0,
  status: "pendiente",
};

const OrderForm = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<Order>(emptyOrder);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      OrderService.getOrderById(Number(id)).then(setOrder);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: name === "quantity" ? parseInt(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await OrderService.updateOrder(Number(id), order);
    } else {
      await OrderService.createOrder(order);
    }
    navigate("/ordenes");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar Orden" : "Nueva Orden"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="customer_id" type="number" value={order.customer_id} onChange={handleChange} placeholder="ID Cliente" className="w-full border p-2" />
        <input name="menu_id" type="number" value={order.menu_id} onChange={handleChange} placeholder="ID Menú" className="w-full border p-2" />
        <input name="motorcycle_id" type="number" value={order.motorcycle_id} onChange={handleChange} placeholder="ID Moto" className="w-full border p-2" />
        <input name="quantity" type="number" value={order.quantity} onChange={handleChange} placeholder="Cantidad" className="w-full border p-2" />
        <input name="total_price" type="number" value={order.total_price} onChange={handleChange} placeholder="Precio total" className="w-full border p-2" />
        <input name="status" value={order.status} onChange={handleChange} placeholder="Estado" className="w-full border p-2" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;

