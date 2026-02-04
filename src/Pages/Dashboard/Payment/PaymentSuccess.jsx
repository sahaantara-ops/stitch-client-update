
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { IoBagCheckOutline } from 'react-icons/io5'
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure'
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const AxiosSecure = useAxiosSecure();
  const[paymentInfo,setPaymentInfo] = useState({});
  const sessionId = searchParams.get('session_id')
   console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
        AxiosSecure.patch (`/payment-success?session_id=${sessionId}`)
        .then(res=>{
            console.log(res.data)
            setPaymentInfo({
              transactionId: res.data.transactionId,
              trackingId: res.data.trackingId,
            })
        })
    }
      
     }, [sessionId,AxiosSecure])
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-white p-10 rounded-lg shadow-lg text-center'>
        <IoBagCheckOutline className='w-16 h-16 text-green-500 mx-auto mb-4' />
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          Payment Successful!
        </h1>
        <p className='text-gray-600 mb-6'>
          Thank you for your purchase. Your order is being processed.
        </p>
        <p>Your TransactionId : {paymentInfo.transactionId}</p>
        <p>Your Parcel TrackingId :{paymentInfo.trackingId}</p>
        <Link
          to='/dashboard/allorders'
          className='inline-block bg-lime-500 text-white font-semibold py-2 px-4 rounded hover:bg-lime-600 transition duration-300'
        >
          Go to My Orders
        </Link>
      </div>
    </div>
  )
}

export default PaymentSuccess
