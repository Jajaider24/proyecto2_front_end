// src/pages/Home.tsx
import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = [
    { name: "Pizza", price: 24000, image: "/images/pizza.jpg" },
    { name: "Hamburguesa", price: 18000, image: "/images/burger.jpg" },
    { name: "Bebida", price: 5000, image: "/images/soda.jpg" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Productos disponibles</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((prod, idx) => (
          <ProductCard key={idx} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
