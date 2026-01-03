import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';

const NewOrder = () => {
    const {register,handleSubmit,formstate:{error}} =useForm();
    const handleAddProduct = data =>{

    }
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div>
             <h2 className='text-2xl font-bold text-amber-950'>Create new order </h2>
             <form onSubmit={handleSubmit(handleAddProduct)}>
                
            <div>
                  <label className="label">
                    <input type="radio"
                      {...register('ProductType')}
                    value="document" className="radio" defaultChecked />
                    Document</label>
            </div>
               <div>
                  <label className="label">
                    <input type="radio"
                      {...register('ProductType')}
                    value="non-document" className="radio" defaultChecked />
                    Non-Document</label>
            </div>


             </form>

            </div>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default NewOrder;