import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {

    const data= useLoaderData()
    console.log(data)
    const model = data.result
    console.log(model)
    return (
       <div className="w-270 h-160 mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 h-full shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col h-full md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full h-full md:w-1/2">
            <img
              src={model.image}
              alt=""
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {model.title}
            </h1>

            <div className="flex gap-2">
              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                {model.category}
              </div>

              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                Quantity {model.quantity}
              </div>
               <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                 {model.food_status}
              </div>
             
              
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {model.description}
            </p>
            <div className=''>
               <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                 Location:{model.pickup_location}
              </div>
              
              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium mt-2">
                 Expiry Date:{model.expiryDate}
              </div>
              
            </div>
            </div>
            </div>
            </div>
            </div>
    );
};

export default ProductDetails;