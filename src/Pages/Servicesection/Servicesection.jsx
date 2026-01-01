import React from 'react';
import febrics from '../../assets/febrics.jpg';
import Navbar from '../Shared/Navbar/Navbar';
import ServiceCard from './ServiceCard';


const ServicesSection = () => {
  return (
    
    <section className="relative h-400 bg-gray-50 py-4">
      
       <Navbar></Navbar>
      
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={febrics}
            alt="Fabric"
            className="rounded-xl h-200 w-full"
          />

          {/* EXPERIENCE CARD */}
          <div className="absolute top-6 left-6 bg-white shadow-lg rounded-xl p-6 w-40">
            <h2 className="text-4xl font-bold text-pink-500">15+</h2>
            <p className="text-sm tracking-widest text-gray-600">
              YEARS EXPERIENCE
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-pink-500 uppercase font-semibold mb-2">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            It’s not about brand, it’s about style.
          </h2>

          <p className="text-gray-600 max-w-lg">
           We provide reliable and efficient garment production services, focusing on quality, timely delivery, and customer satisfaction. From order management to final production, our team ensures every step is handled with care and precision to meet your business needs.
          </p>
        </div>
      </div>

      {/* STATS CARD */}
      <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 bg-white shadow-xl rounded-xl w-[90%] max-w-4xl">
        <div className="grid grid-cols-3 text-center py-6">

          <div>
            <h3 className="text-3xl font-bold text-indigo-600">47K+</h3>
            <p className="text-gray-500 text-sm">Happy Customer</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-indigo-600">56+</h3>
            <p className="text-gray-500 text-sm">Country Export</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-indigo-600">4.7+</h3>
            <p className="text-gray-500 text-sm">Review Customer</p>
          </div>
          

        </div>
      </div>

      <section  className="relative min-h-[75vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://tse1.explicit.bing.net/th/id/OIP.lQkDJpKT34svC4fKksMHqQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3')",
      }} >
        <h3 className='text-2xl font-bold text-green-900 py-4 text-center  '>What we focus</h3>
         
            <ServiceCard></ServiceCard>
          </section>
      
    </section>
    
  );
};

export default ServicesSection;
