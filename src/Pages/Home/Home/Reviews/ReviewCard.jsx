import React from 'react';

import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({review}) => {
    const {customerName,customerImage,comment,rating, } = review
    return (
        <div className="card w-100 h-100 max-w-md bg-base-100 shadow-lg rounded-2xl p-6">
      
      {/* Quote Icon */}
      <FaQuoteRight /> 

      {/* Feedback Text */}
      <p className="text-gray-600 leading-relaxed mb-6">{comment}
      </p>

      <div className="divider my-2"></div>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-4">
        <div className="avatar">
          <div className="w-12 rounded-full bg-primary text-white flex items-center justify-center">
            A
          </div>
        </div>

        <div>
            <h4 className="font-semibold text-gray-800">{customerName}</h4>
             <img src={customerImage} className='w-10 h-10'/>
             <p><span className='text-amber-950'>rating:</span>{rating}</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;