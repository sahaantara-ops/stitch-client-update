import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import brand1 from '../../../assets/brand1.webp'
import brand2 from '../../../assets/baner2.webp'
import brand3 from '../../../assets/brand 3.webp'
import brand4 from '../../../assets/brand 4.jpg'
import brand5 from '../../../assets/protex_logo.png'
import { Autoplay } from 'swiper/modules';

const brandLogos = [brand1,brand2,brand3,brand4,brand5]

const Brands = () => {
    return (
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={7}
        grabCursor={true}
        loop={false}
        modules={[Autoplay]}
        autoplay={{
            delay:500,
            disableOnInteraction:false,
        }}
      >
         
        {
            brandLogos.map((logo,index) =>  <SwiperSlide key={index}> <img src={logo} alt="" className='w-20 h-20 mt-10' /> </SwiperSlide> )
        }
         
        
       
      </Swiper>
    );
};

export default Brands;