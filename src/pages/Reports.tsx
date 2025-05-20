import React from "react";
import PieChartComponent from "../components/charts/PieChartComponent";
import BarChartComponent from "../components/charts/BarChartComponent";
import LineChartComponent from "../components/charts/LineChartComponent";

const Reports: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Informes Visuales</h1>
      <PieChartComponent />
      <BarChartComponent />
      <LineChartComponent />
    </div>
  );
};

export default Reports;
