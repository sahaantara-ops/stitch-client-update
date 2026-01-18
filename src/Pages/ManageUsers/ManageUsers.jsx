import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    }
  });

  const handleRoleChange = async (id, role) => {
    await axiosSecure.patch(`/users/role/${id}`, { role });
    toast.success("Role updated");
    refetch();
  };

  const handleSuspend = async (id, currentStatus) => {
    await axiosSecure.patch(`/users/suspend/${id}`, {
      suspended: !currentStatus
    });
    toast.success(currentStatus ? "User unsuspended" : "User suspended");
    refetch();
  };

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
                <td>{user.name || "N/A"}</td>
                <td>{user.email}</td>
                <td>
                  <span className="badge badge-info">
                    {user.role}
                  </span>
                </td>

                <td className="flex gap-2">
                  {/* Make Admin */}
                  <button
                    disabled={user.role === "admin"}
                    onClick={() => handleRoleChange(user._id, "admin")}
                    className="btn btn-xs btn-success"
                  >
                    Make Admin
                  </button>

                  {/* Suspend */}
                  <button
                    onClick={() =>
                      handleSuspend(user._id, user.suspended)
                    }
                    className={`btn btn-xs ${
                      user.suspended ? "btn-warning" : "btn-error"
                    }`}
                  >
                    {user.suspended ? "Unsuspend" : "Suspend"}
                  </button>
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
