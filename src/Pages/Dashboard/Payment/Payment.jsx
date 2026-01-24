import { useParams } from 'react-router';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../Components/Hooks/useAuth';

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const {user} = UseAuth();

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', id],
    enabled: !!id, // extra safety
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res.data;
    }
    
  });
  const handlePayment =async ()=>{
    const paymentInfo ={
    price: product?.result?.price,
    id: product?.result?._id,
    senderEmail:user?.email,
    productName: product?.result?.productName,

  }
  console.log("paymentInfo:", paymentInfo);
  try {
    const res = await axiosSecure.post(
      '/create-checkout-session',
      paymentInfo
    );
    console.log(res.data.ur);
    window.location.assign(res.data.url);
  } catch (err) {
    console.error(err.response?.data || err);
  }
};


  

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Pay please ${product?.result?.price}: {product?.result?.productName}</h2>
      <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
    </div>
  );
};

export default Payment;
