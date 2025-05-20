import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  LineChart, Line
} from 'recharts';
import React from 'react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const pieData = [
  { name: 'Pizza', value: 400 },
  { name: 'Hamburguesa', value: 300 },
  { name: 'Tacos', value: 300 },
  { name: 'Ensaladas', value: 200 },
];

const barData = [
  { name: 'Enero', pedidos: 400 },
  { name: 'Febrero', pedidos: 300 },
  { name: 'Marzo', pedidos: 200 },
  { name: 'Abril', pedidos: 278 },
  { name: 'Mayo', pedidos: 189 },
];

const timeData = [
  { fecha: '01/01', ventas: 240 },
  { fecha: '02/01', ventas: 221 },
  { fecha: '03/01', ventas: 229 },
  { fecha: '04/01', ventas: 200 },
  { fecha: '05/01', ventas: 218 },
];

const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Pie Chart 1 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Top Productos</h2>
        <PieChart width={250} height={250}>
          <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Pie Chart 2 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Categorías</h2>
        <PieChart width={250} height={250}>
          <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[(index + 1) % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Pie Chart 3 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Reparto por Zona</h2>
        <PieChart width={250} height={250}>
          <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[(index + 2) % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Bar Chart 1 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Pedidos por Mes</h2>
        <BarChart width={300} height={200} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pedidos" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Bar Chart 2 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Errores de Entrega</h2>
        <BarChart width={300} height={200} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pedidos" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* Bar Chart 3 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Clientes Nuevos</h2>
        <BarChart width={300} height={200} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pedidos" fill="#ffc658" />
        </BarChart>
      </div>

      {/* Time Chart 1 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Ventas diarias</h2>
        <LineChart width={300} height={200} data={timeData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Time Chart 2 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Reembolsos</h2>
        <LineChart width={300} height={200} data={timeData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* Time Chart 3 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Usuarios Activos</h2>
        <LineChart width={300} height={200} data={timeData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#ffc658" />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;

