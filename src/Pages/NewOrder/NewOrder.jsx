import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';
import Container from '../Shared/Container/Container';





const NewOrder = () => {
    const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm(  {
  defaultValues: {
    ProductType: "document"
  }
});
 
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