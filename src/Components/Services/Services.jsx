import React from 'react';
import logo from '../../assets/serve.jpg'
import { ArrowRight } from 'lucide-react';

const Services = () => {
    return (
       <div className=' w-full h-full flex flex-wrap mt-20  bg-amber-200 gap-x-0 gap-y-4 px-15 py-10 grid grid-cols-3 '>
          <div>
          <p className='text-2xl font-extrabold mt-20  text-amber-900'>Our Services <ArrowRight /></p> 
          <p className='text-1xl font-bold text-amber-900'>We are always concern to hand over a customer's preferred product with a satisfying finishing. </p>
          </div>
         

          <div class="book ">
    <p className='text-gray gap-3 '>Standard apparel manufacturing workflow</p>
    <div class="cover">
    <p>
    <img src={logo} className='w-10 h-10 items-center' />
    <h2 className='text-1xl text-amber-900 font-extrabold font-secondary'>Classic <br/> designing</h2>
    </p>
    </div>
   </div>
            <div class="book">
    <p className='text-gray gap-3'>Real-time well performance monitoring</p>
    <div class="cover">
    <p>
    <img src={logo} className='w-10 h-10' />
    <h2 className='text-1xl  text-amber-900 font-extrabold font-secondary'>Well <br/> monitoring</h2>
    </p>
    </div>
   </div>

             <div class="book">
    <p className='text-gray gap-3'>Reliable final protection process</p>
    <div class="cover">
    <p>
    <img src={logo} className='w-10 h-10' />
    <h2 className='text-1xl  text-amber-900 font-extrabold font-secondary'>Secure <br/>finishing</h2>
    </p>
    </div>
   </div>

            <div class="book">
    <p className='text-gray gap-3'>Uniform pricing across items</p>
    <div class="cover">
    <p>
    <img src={logo} className='w-10 h-10' />
    <h2 className='text-1xl  text-amber-900 font-extrabold font-secondary'>Pricing</h2>
    </p>
    </div>
   </div>

           <div class="book">
    <p className='text-gray gap-3'>Monitor shipment and delivery status

</p>
    <div class="cover">
    <p>
    <img src={logo} className='w-10 h-10' />
    <h2 className='text-1xl  text-amber-900 font-extrabold font-secondary'>Safe  <br/>Delivery</h2>
    </p>
    </div>
   </div>
            
    <div class="book">
    <p className='text-gray gap-3'>Returning goods to merchants</p>
    <div class="cover">
    <p>
    <img src={logo} className='w-10 h-10' />
    <h2 className='text-1xl  text-amber-900 font-extrabold font-secondary'>Parcel<br/> Return</h2>
    </p>
    </div>
   </div>
        </div>
    );
};

export default Services;