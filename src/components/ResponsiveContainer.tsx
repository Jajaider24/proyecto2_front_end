// src/components/ResponsiveContainer.tsx
import React from "react";

const ResponsiveContainer: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Interfaz Responsive
      </h2>
      <p className="text-base md:text-lg lg:text-xl">
        Esta interfaz se adapta automáticamente a diferentes tamaños de
        pantalla. Prueba cambiando el tamaño de tu navegador.
      </p>
    </div>
  );
};

export default ResponsiveContainer;
