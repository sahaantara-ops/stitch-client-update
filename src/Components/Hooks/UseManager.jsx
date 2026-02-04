import { useQuery } from '@tanstack/react-query';
import UseAuth from '../Hooks/useAuth';
import useAxiosSecure from './useAxiosSecure';

const useManager = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isManager, isLoading } = useQuery({
    queryKey: ['isManager', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${user.email}/role`);
      return res.data.manager;
    }
  });

  return [isManager, isLoading];
};

export default useManager;
