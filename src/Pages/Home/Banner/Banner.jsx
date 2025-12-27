import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/cloth.jpg'
import img2 from '../../../assets/tracker.webp'

const Banner = () => {
    return (
        <Carousel  showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className='relative'>
                    <img src={img1} className='w-60 h-140' />
                    <p className='text-5xl  absolute bottom-18 left-28  -translate-x-1/2 text-amber-900 font-extrabold '>
                        Ensure <br/>
                         your<br/>
                          order<br/>
                    </p>
                    
                </div>
                <div className=''>
                    <img src={img2} className='w-50 h-140' />
                   
                    
                </div>
                
            </Carousel>
    );
};

export default Banner;