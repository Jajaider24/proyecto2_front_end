// src/components/ProductCard.tsx
import React from "react";

interface Props {
  name: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<Props> = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onAddToCart}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
