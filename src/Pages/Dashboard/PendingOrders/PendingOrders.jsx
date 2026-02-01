import React from 'react';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FcApproval } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import UseAuth from '../../../Components/Hooks/useAuth';
import Swal from 'sweetalert2';
const PendingOrders = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = UseAuth();
    
    const {data: allorders = []} = useQuery({
        queryKey: ['allorders','pendingOrders'],
        queryFn: async()=>{
            const res =  await axiosSecure.get(`/allorders?productStatus=Suspended`)
            return res.data;
        
        }
    });
        const updateStatus = (allorder,productStatus) =>{
            const updateInfo = {status:productStatus ,email:user.email}
            axiosSecure.patch(`/allorders/${allorder._id}`,updateInfo)
            .then(res=>{
                if(res.data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position:"top-end",
                        icon:"Success",
                        title:`Status is set to ${productStatus}`,
                        showConfirmButton:false,
                        Timer:2000

                    })
                }
            })
        }
    return (
        <div>
            <h2>Pending Orders:{allorders.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Order Date</th>
        <th>Status</th>
        <th>View</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {allorders.map((allorder,index) =>
          <tr key= {allorder._id}>
        <th>{ index + 1 }</th>
        <td>{allorder.productName}</td>
        <td>{allorder.orderQuantity}</td>
        <td>{allorder.createdAt}</td>
        <td>{allorder.productStatus}</td>
         <td><button  className="btn btn-warning hover:bg-amber-300"><MdPreview /></button></td>
        <td><button  className="btn btn-warning hover:bg-amber-300"><FcApproval />Approaved</button></td>
         <td><button  className="btn btn-warning hover:bg-amber-300"><MdCancel />Reject</button></td>
      </tr>
      )}
    
     
    </tbody>
  </table>
</div>
        </div>
        
    );
};

export default PendingOrders;