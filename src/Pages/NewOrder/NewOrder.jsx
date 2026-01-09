import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';
import Container from '../Shared/Container/Container';
import logo from '../../assets/BKash-Logo.png'
import logo2 from '../../assets/Nagad-Vertical-Logo.wine.png'
import logo3 from '../../assets/cash-on-delivery.png'
import { useLoaderData } from 'react-router';





const NewOrder = () => {

 const model = useLoaderData()
    console.log(model)
    const {
  register,
  handleSubmit,
  watch,
  formState: { errors }
} = useForm(  {
  defaultValues: {
    ProductType: "document"
  }
});
  
   const quantity = watch("orderQuantity") || model.minimumOrder;
   const totalPrice = quantity * model.price;


 
    const handleAddProduct = data =>{
         
        console.log("Form Data:",data);
    }
    return (
        <Container>

       
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div>
             <h2 className='text-2xl font-bold text-amber-950'>Create new order </h2>
             <form onSubmit={handleSubmit(handleAddProduct)} className='mt-5 p-4 text-black' >
                
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
          <input type="email"{...register('Email')} className="input" placeholder="Email" />
          </fieldset>

           <fieldset className="fieldset">
          <label className="label">Product Name</label> 
          <input type="email"{...register('ProductName')} className="input" placeholder="Product Name" />
          </fieldset>

           <fieldset className="fieldset">
          <label className="label">Cloth Quality</label>
          <input type="email"{...register('ClothQuality')} className="input" placeholder="Cloth Quality" />
          </fieldset>
           
           <fieldset className="fieldset">
          <label className="label">First Name</label>
          <input type="text"{...register('First Name')} className="input" placeholder="First Name" />
          </fieldset>
          
           <fieldset className="fieldset">
          <label className="label">Last Name</label>
          <input type="text"{...register('Last Name')} className="input" placeholder="Last Name" />
          </fieldset>
           
          



<label className="form-control w-full">
                    <span className="label-text text-gray-400 w-40">Payment Method</span>
                   <select
                  {...register("role", { required: true })}
                   className="select select-bordered w-full"
                     >
                <option value="">Select Method</option>
                <option value="Bkash" className='flex'>
                  <img src={logo} className='w-7 h-5'/>
                  Bkash
                  </option>
                <option value="Nagad" className='flex'>
                  <img src={logo2} className='w-7 h-5'/>
                Nagad
                </option>
                <option value="COD" className='flex'>
                  <img src={logo3} className='w-7 h-5'/>
                Cash On Delivery
                </option>
               </select>
                </label>
          <fieldset className="fieldset">
          <label className="label">Cloth Quality</label>
          <input type="email"{...register('ClothQuality')} className="input" placeholder="Cloth Quality" />
          </fieldset>
           
        


<fieldset className="fieldset">
  <label className="label font-semibold">Order Quantity</label>

  <input
    type="number"
    className="input input-bordered w-full"
    defaultValue={model.minimumOrder}
    {...register("orderQuantity", {
      required: "Quantity is required",
      min: {
        value: model.minimumOrder,
        message: `Minimum order is ${model.minimumOrder}`
      },
      max: {
        value: model.availableQuantity,
        message: `Maximum available quantity is ${model.availableQuantity}`
      }
    })}
  />

  {errors.orderQuantity && (
    <p className="text-red-500 text-sm">
      {errors.orderQuantity.message}
    </p>
  )}
</fieldset>

<fieldset className="fieldset">
  <label className="label font-semibold">Order Price</label>

  <input
    type="text"
    readOnly
    className="input input-bordered w-full bg-gray-100"
    value={`${totalPrice} tk`}
  />
</fieldset>

 <fieldset className="fieldset">
  <label className="label">Contact Number</label> 
  <input type="number"{...register('Contact Number')} className="input" placeholder="Contact Number" />
  </fieldset>

   <fieldset className="fieldset">
  <label className="label">Delivery Address</label> 
  <input type="text"{...register('Delivery Address')} className="input" placeholder="Delivery Address" />
  </fieldset>




            </div>

              < input type='submit' className="btn btn-primary text-black" value="Create Order" />
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