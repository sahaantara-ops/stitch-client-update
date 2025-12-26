import React from 'react';
import stitchlogo from '../../assets/vecteezy_knitting-with-needles-and-ball-of-yarn-handmade-clothes_23336858.jpg'

const Logo = () => {
    return (
        <div>
              <img src={stitchlogo} className='w-10 h-10 ml-4'alt=''/>
              <h2>Stitch <span className='font-bold text-amber-200'>Track</span></h2>
        </div>
    );
};

export default Logo;