import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { fecha: "2023-01-01", pedidos: 20 },
  { fecha: "2023-01-02", pedidos: 35 },
  { fecha: "2023-01-03", pedidos: 50 },
  { fecha: "2023-01-04", pedidos: 80 },
  { fecha: "2023-01-05", pedidos: 65 },
];

const LineChartComponent: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">
        Gráfico de Series Temporales - Pedidos Diarios
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pedidos" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
