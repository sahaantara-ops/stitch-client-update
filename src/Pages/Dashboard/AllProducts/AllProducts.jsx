import React from 'react';
import UseAuth from '../../../Components/Hooks/useAuth';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdEdit } from "react-icons/md";
import { MdPreview } from "react-icons/md";

const AllProducts = () => {
    
  
  const axiosSecure = useAxiosSecure();
  const {data: products = []} = useQuery({
    queryKey:['allProducts'],
    queryFn :  async ()=>{
        const res = await axiosSecure.get(`/products`);
        return res.data.products;

    }
  })

    return (
        <div>
           <h2> All of my orders : {products.length}</h2> 
        </div>
    );
};

export default AllProducts;