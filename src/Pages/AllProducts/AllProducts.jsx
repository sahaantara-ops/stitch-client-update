import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCards from '../../Components/ProductCards/ProductCards';

const AllProducts = () => {
    const Products = useLoaderData()
    console.log(Products)
    return (
        <div>
<h2 className='text-2xl font-bold text-amber-800 ml-170'>All Products</h2>
            <p className='text-1xl text-amber-600 ml-160'>Explore Our Makings</p>
            <div className='grid grid-cols-3 gap-6 mt-10 ml-60 mb-20'>
                {Products.map(model => <ProductCards key = {model._id} model={model}></ProductCards>)}
            </div>
            
        </div>
    );
};

export default AllProducts;