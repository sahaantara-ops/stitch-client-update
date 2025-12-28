import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../../../Components/Services/Services';
import Brands from '../Brands/Brands';
import Reviews from './Reviews/Reviews';


const reviewsPromise = fetch('/public/Public.json').then(res=>res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services ></Services> 
            <Brands></Brands> 
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            
            
        </div>
    );
};

export default Home;