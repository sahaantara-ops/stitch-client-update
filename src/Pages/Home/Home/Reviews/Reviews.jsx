import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <div className='my-24'>
            <div className='text-center my-10'>
                <h3 className='text-2xl text-amber-800 font-bold'>Customers Feedback</h3>
                <p className='text-1xl text-gray-400 '>What our clients say about our production tracking system.Real experiences from our valued customers</p>
            </div>
              
      <Swiper kew={false}
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 60,
          stretch: '40%',
          depth: 300,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
        }}
         
        autoplay={{
            delay:2500,
            disableOnInteraction:false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
       {
        reviews.map(review => <SwiperSlide> key={review.id}
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
       }
        
      </Swiper>
  
        </div>
    );
};

export default Reviews;