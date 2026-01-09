import React from 'react';
import { useLoaderData,useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { useContext } from "react";


const ProductDetails = () => {

 const navigate = useNavigate();
  
    
    const {user,role} = useContext(AuthContext);
     const data = useLoaderData();
  const model = data?.result;

  const canOrder = user && role !== "admin" && role !== "manager";

  if (!model) return <p>Loading...</p>;

  return (
    <div className="w-270 h-160 mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 h-full shadow-xl border rounded-2xl">
        <div className="flex flex-col md:flex-row gap-8 p-6">

          <div className="md:w-1/2">
            <img
              src={model.productImage}
              alt={model.productName}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold">{model.productName}</h1>

            <div className="flex gap-2">
              <div className="badge badge-outline">
                Quantity: {model.availableQuantity}
              </div>
              <div className="badge badge-outline">
                {model.category}
              </div>
            </div>

            <p className="text-lg font-medium">
              Price: {model.price} tk
            </p>

            <button
              disabled={!canOrder}
              className="btn btn-primary"
              onClick={() => navigate(`/neworder`)}
            >
              Order / Book
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;