import React from "react";
import { Link } from "react-router";

const Badge = ({ children }) => (
  <span className="px-2 py-1 text-xs rounded-xl bg-[#FF97D0] text-gray-900 font-medium">
    {children}
  </span>
);

const ProductCards = ({ model }) => {
  const {
    productName,
    productImage,
    category,
    price,
    availableQuantity,
    _id,
    Status,
  } = model;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* IMAGE */}
      <div className="h-48 overflow-hidden">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {productName}
        </h2>

        {/* BADGE */}
        <Badge>{category}</Badge>

        {/* INFO */}
        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <p>Quantity: {availableQuantity}</p>
          <p>Status: {Status}</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            Price: {price} Tk
          </p>
        </div>

        {/* BUTTON */}
        <Link
          to={`/product-details/${_id}`}
          className="block text-center w-full py-2 rounded-xl bg-[#FF62BB] hover:bg-[#B331F1] text-white text-sm font-medium transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;