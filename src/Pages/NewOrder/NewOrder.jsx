import React, { useEffect } from 'react';

import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useForm,useWatch } from 'react-hook-form';
import Container from '../Shared/Container/Container';
import { Navigate, useLoaderData } from 'react-router';
import UseAuth from '../../Components/Hooks/useAuth';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';






const NewOrder = () => {

 const model = useLoaderData();
 console.log(model);

//  const navigate = useNavigate();
 const {user} = UseAuth();
 const { register, handleSubmit, control,   setValue,formState: { errors } } = useForm();
 useEffect(() => {
  if (user?.email) {
    setValue("email", user.email);
  }
}, [user, setValue]);



 const axiosSecure = useAxiosSecure();
 

 const quantity = useWatch({ control, name: "orderQuantity" }) || model?.result?.minimumOrder;
 const totalPrice = quantity * model?.result?.price;
 console.log(totalPrice);

 const handleNewOrder = (data) => {
  console.log('Form data',data)
  

 
  Swal.fire({
    title: 'Confirm Payment',
    text: `You have to pay ${totalPrice} taka`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, Pay Now',
  }).then(async () => {
      const res = await axiosSecure.post('/neworder', data);
      console.log('after saving order', res.data);
   
  });
};


  



    
return(
        <Container>
       <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div>
             <h2 className='text-2xl font-bold text-amber-950'>Create new order </h2>
             <form onSubmit={handleSubmit(handleNewOrder)}
             
             className='mt-5 p-4 text-black' >
                
            <div>
                  <label className="label">
                    <input type="radio"
                      {...register('ProductType',{ required: "Product type is required" })}
                    value="document" className="radio" />
                    Document</label>
                    {errors?.ProductType && (
                   <p className="text-red-500">{errors.ProductType.message}</p>
                  )}
            </div>
               <div>
                  <label className="label">
                    <input type="radio"
                      {...register('ProductType',{ required: "Product type is required" })}
                    value="non-document" className="radio"  />
                    Non-Document</label>
                    
            </div>
            <div className='grid grid-cols-3 gap-2'>
              <fieldset className="fieldset">
          <label className="label">Email</label>
         <input
  type="email"
  {...register("email", { required: "Email is required" })}
  className="input"
/>

{errors.email && (
  <p className="text-red-500 text-sm">{errors.email.message}</p>
)}

          </fieldset>

           <fieldset className="fieldset">
          <label className="label">Product Name</label> 
          <input type="text"{...register('productName')} className="input" placeholder="Product Name"   defaultValue={model?.result?.productName} />
          </fieldset>

           <fieldset className="fieldset">
          <label className="label">Product Status</label> 
          <input type="text"{...register('productStatus')} className="input" placeholder="Product Status"   defaultValue={model?.result?.Status} />
          </fieldset>

          
           
           <fieldset className="fieldset">
          <label className="label">First Name</label>
          <input type="text"{...register('firstName')} className="input" placeholder="First Name" />
          </fieldset>
          
           <fieldset className="fieldset">
          <label className="label">Last Name</label>
          <input type="text"{...register('lastName')} className="input" placeholder="Last Name" />
          </fieldset>
           
          



                   <label className="form-control w-full">
                    <span className="label-text text-gray-400 w-40">Payment Method</span>
                   <select
                  {...register("paymentMethod", { required: true })}
                   className="select select-bordered w-full"
                     >
             
                <option value="">Select Method</option>
                <option value="Bkash" className='flex'>
              
                  Bkash
                  </option>
                <option value="Nagad" className='flex'>
                 
                Nagad
                </option>
                <option value="COD" className='flex'>
                  
                Cash On Delivery
                </option>
               </select>
               {errors.paymentMethod && (
  <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
)}
                </label>
        
<fieldset className="fieldset">
  <label className="label font-semibold">Order Quantity</label>

  <input
    type="number"
    className="input input-bordered w-full"
    defaultValue={model?.result?.minimumOrder}
    {...register("orderQuantity", {
      required: "Quantity is required",
      min: {
        value: model?.result?.minimumOrder,
        message: `Minimum order is ${model?.result?.minimumOrder}`
      },
      max: {
        value: model?.result?.availableQuantity,
        message: `Maximum available quantity is ${model?.result?.availableQuantity}`
      }
    })}
  />

  {errors.orderQuantity && (
    <p className="text-red-500 text-sm">
      {errors.orderQuantity.message}
    </p>
  )}
</fieldset>

{/* <fieldset className="fieldset">
  <label className="label font-semibold">Order Price</label>

  <input
    type="text"
    readOnly
    className="input input-bordered w-full bg-gray-100"
    value={`${totalPrice} tk`}
  />
</fieldset> */}
<fieldset className="fieldset">
<label className="label font-semibold">Order Price</label>
 <input type="text"{...register('orderprice', { valueAsNumber: true })} className="input input-bordered w-full bg-gray-100"
   value = {totalPrice}  />
     </fieldset>



   <fieldset className="fieldset">
  <label className="label">Delivery Address</label> 
  <input type="text"{...register('deliveryAddress')} className="input" placeholder="Delivery Address" />
  </fieldset>




            </div>

            <input type='submit'
            className="btn btn-primary text-black" value="Create Order" />
             
             </form>
            

            </div>
            <section>
                <Footer></Footer>
            </section>
        </div>
         </Container>
    );
};

export default NewOrder;