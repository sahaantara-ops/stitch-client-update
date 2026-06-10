import React, { useEffect, useState } from "react";
import ProductCards from "../ProductCards/ProductCards";
import Badge from "../ui/Badge";

const Products = ({ selectedBrand = "all" }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts =
    selectedBrand === "all"
      ? products
      : products.filter(
          (p) =>
            p.brand?.toLowerCase() === selectedBrand.toLowerCase()
        );

  return (
    <section className="my-12 px-4">
      {/* HEADER */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Products
        </h2>

        <div className="mt-3">
          <Badge>
            {filteredProducts.length} Products Available
          </Badge>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((model) => (
          <ProductCards key={model._id} model={model} />
        ))}
      </div>
    </section>
  );
};

export default Products;