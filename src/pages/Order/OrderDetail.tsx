import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderService from "../../services/OrderService";
import { Order } from "../../models/Order";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (id) {
      OrderService.getOrderById(Number(id)).then(setOrder);
    }
  }, [id]);

  if (!order) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalle de la Orden #{order.id}</h1>
      <ul className="space-y-2">
        <li><strong>Cliente:</strong> {order.customer_id}</li>
        <li><strong>Menú:</strong> {order.menu_id}</li>
        <li><strong>Moto:</strong> {order.motorcycle_id}</li>
        <li><strong>Cantidad:</strong> {order.quantity}</li>
        <li><strong>Total:</strong> ${order.total_price}</li>
        <li><strong>Estado:</strong> {order.status}</li>
      </ul>
    </div>
  );
};


export default OrderDetail;

