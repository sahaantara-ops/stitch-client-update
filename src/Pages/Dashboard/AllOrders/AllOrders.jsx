import UseAuth from '../../../Components/Hooks/useAuth';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdEdit } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { Link } from 'react-router';
const AllOrders = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  console.log('Logged in user email:', user?.email);
   
  const {data: neworder = []} = useQuery({
    queryKey:['allorders', user?.email],
    queryFn :  async ()=>{
        const res = await axiosSecure.get(`/neworder?email=${user?.email}`);
        console.log(res.data);
        return res.data;
    }
  })

  return (
    <div>
      <h2> All of my orders : {neworder.length}</h2>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Status</th>
         <th>Payment</th>
        <th>Action</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {
        neworder.map(products => <tr key={products._id}>
        <th>{products._id}</th>
        <td>{products.productName}</td>
        <td>{products.orderQuantity}</td>
        <td>{products.productStatus}</td>
         <td>
        {
          products.payment_status === 'paid'?
          <span className="text-green-600 font-bold">Paid</span> :
          <Link to={`/dashboard/payment/${products._id}`}><button className="btn btn-sm btn-primary">Pay</button></Link>
        }
      </td>
        <td><button  className="btn btn-warning hover:bg-amber-300"><MdEdit /></button></td>
         <td><button  className="btn btn-warning hover:bg-amber-300"><MdPreview /> </button></td>
      </tr> )
      }
     
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllOrders;
