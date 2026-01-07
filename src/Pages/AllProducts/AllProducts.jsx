import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCards from '../../Components/ProductCards/ProductCards';

const AllProducts = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
<h2 className='text-2xl font-bold from-neutral-500 ml-170'>All Products</h2>
            <p className='text-1xl font-light from-neutral-600 ml-150'>Explore Our Makings</p>
            <div className='grid grid-cols-3 gap-6 mt-10 ml-60 mb-20'>
                {data.map(model => <ProductCards key = {model._id} model={model}></ProductCards>)}
            </div>
            
        </div>
    );
};

export default AllProducts;