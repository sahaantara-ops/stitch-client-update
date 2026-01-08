import React, { useEffect, useState } from 'react';
import ProductCards from '../ProductCards/ProductCards';

const Products = () => {
    const [product,setProduct] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/products/home')
        .then(res => res.json())
        .then(data => setProduct(data));
    },[]);
    return (
          <section className="my-12">
      <h2 className="text-3xl font-bold text-amber-600 text-center mb-6">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map(model => (
          <ProductCards key={model._id} model={model} />
        ))}
      </div>
    </section>
    );
};

export default Products;