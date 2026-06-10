import React, { useEffect, useState } from "react";
import ProductCards from "../ProductCards/ProductCards";
import Badge from "../ui/Badge";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/home`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section className="my-12 px-4">

      {/* HEADER */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Products
        </h2>

        {/* ✅ BADGE ADDED HERE */}
        <div className="mt-3">
          <Badge>
            {product.length} Products Available
          </Badge>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map((model) => (
          <ProductCards key={model._id} model={model} />
        ))}
      </div>
    </section>
  );
};

export default Products;