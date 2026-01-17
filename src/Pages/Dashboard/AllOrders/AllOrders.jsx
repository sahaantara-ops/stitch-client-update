import UseAuth from '../../../Components/Hooks/useAuth';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdEdit } from "react-icons/md";
import { MdPreview } from "react-icons/md";
const AllOrders = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  console.log('Logged in user email:', user?.email);
   
  const {data: products = []} = useQuery({
    queryKey:['allorders', user?.email],
    queryFn :  async ()=>{
        const res = await axiosSecure.get(`/products?email=${user?.email}`);
        return res.data;

    }
  })

  return (
    <div>
      <h2> All of my orders : {products.length}</h2>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Status</th>
        <th>Action</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(products => <tr key={products._id}>
        <th>{products._id}</th>
        <td>{products.productName}</td>
        <td>{products.availableQuantity}</td>
        <td>{products.Status}</td>
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
