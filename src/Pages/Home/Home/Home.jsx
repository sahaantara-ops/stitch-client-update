import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../../../Components/Services/Services';
import Brands from '../Brands/Brands';
import Reviews from './Reviews/Reviews';
import Products from '../../../Components/Products/Products';


const reviewsPromise = fetch('/Public.json').then(res=>res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services ></Services> 
            <Brands></Brands> 
            <Products></Products>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            
            
        </div>
    );
};

export default Home;