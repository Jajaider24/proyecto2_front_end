import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Enero", ventas: 400 },
  { name: "Febrero", ventas: 300 },
  { name: "Marzo", ventas: 500 },
  { name: "Abril", ventas: 700 },
  { name: "Mayo", ventas: 600 },
];

const BarChartComponent: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">
        Gráfico de Barras - Ventas Mensuales
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ventas" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
