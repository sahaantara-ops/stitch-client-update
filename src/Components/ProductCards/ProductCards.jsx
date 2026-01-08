import React from 'react';
import { Link } from "react-router";



const ProductCards = ({model}) => {
    const {productName, productImage, category, price,availableQuantity, _id} = model
    console.log(model);
    return (
      
    

     
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 mr-1">
      <figure className="h-48 overflow-hidden">
        <img
          src={productImage}
          alt={productImage}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div className="badge text-xs badge-xs badge-secondary text-amber-500 rounded-full">{category}</div>
        <div className="text-1xl font-bold text-amber-950">Quantity:{availableQuantity}</div>
        <p className="line-clamp-1">
           Price: {price} Tk
        </p>
        
        <div className="card-actions justify-between items-center mt-4">
        <div className="flex gap-4 text-sm text-base-content/60">
           
            
        </div>
        <Link to={`/product-details/${_id}`} className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm">View Details</Link>
        </div>
      </div>
    </div>
   
    );
};

export default ProductCards;
