import React from "react";
import { useLoaderData } from "react-router";
import ProductCards from "../../Components/ProductCards/ProductCards";

const Products = () => {
  const products = useLoaderData();

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          All Products
        </h2>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2">
          Explore Our Makings
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((model) => (
          <ProductCards key={model._id} model={model} />
        ))}
      </div>

    </div>
  );
};

export default Products;