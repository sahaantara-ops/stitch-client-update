import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseRole = () => {
  const { user } = UseAuth(); // ✅ CALL the hook
  const axiosSecure = useAxiosSecure();

  const { data: role='user', isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !!user?.email, // ✅ prevent undefined call
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data.role; // return only role
    },
  });

  return { role, isLoading }; // ✅ proper return
};

export default UseRole;
