import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { FaUsersSlash } from "react-icons/fa";
const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();






  const { refetch,data: users = [],  isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data ;
    }
  });

const handleMakeAdmin = (user) => {
  const roleInfo = {role: 'admin'}
  axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
  .then(res=>{
    console.log(res.data);
    if (res.data.modifiedCount){
      refetch();
      toast.success(`${user.displayName} is now an admin`);
    }
  });
}

const handleRemoveAdmin = (user) => {
  const roleInfo = {role: 'user'}
  axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
  .then(res=>{
    console.log(res.data);
    if (res.data.modifiedCount){
      refetch();
      toast.success(`${user.displayName} removed as an admin`);
    }
  });
}


  if (isLoading) return <p>Loading users...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Manage Users ({users.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name }</td>
                <td>{user.email}</td>
                <td>
                  <span className="badge badge-info">
                    {user.role}
                  </span>
                </td>

                <td className="flex gap-2">
                  {/* Make Admin */}
                 {user.role === 'admin' ? 
                 <button className="btn" onClick={()=> handleRemoveAdmin(user)}>
                    <FaUsersSlash />
                  </button> :
                    <button className="btn" onClick={() => handleMakeAdmin(user)}>
                     <FaUser />
                  </button>
   } 

                  {/* Suspend */}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
