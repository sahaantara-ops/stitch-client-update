import { useParams } from 'react-router';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../Components/Hooks/useAuth';

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const {user} = UseAuth();

  const { isLoading, data: neworder } = useQuery({
    queryKey: ['neworder', id],
    enabled: !!id, // extra safety
    queryFn: async () => {
      const res = await axiosSecure.get(`/neworder/${id}`);
      return res.data;
    }
  
  });
  console.log("neworder:", neworder);

  // console.log("useParams id:", id);
  // console.log('products', id);
  // console.log("Route param id:", id);
  // console.log("Products from API:", neworder);
  const handlePayment =async ()=>{
    const paymentInfo ={
    price:(neworder?.result?.orderprice),
    id: neworder?.result?._id,
    senderEmail:user?.email,
    productName: neworder?.result?.productName,

  }
  console.log("paymentInfo:", paymentInfo);
  try {
    const res = await axiosSecure.post(
      '/create-checkout-session',
      paymentInfo
    );
    console.log(res.data.url);
    window.location.assign(res.data.url);
  } catch (err) {
    console.error(err.response?.data || err);
  }
};


  

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>
  Pay please ${neworder?.result?.orderprice}: {neworder?.result?.productName}
</h2>

      <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
    </div>
  );
};

export default Payment;
