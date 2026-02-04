import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import useManager from "../hooks/useManager";

const ManagerRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isManager, isManagerLoading] = useManager();
  const location = useLocation();

  if (loading || isManagerLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (user && isManager) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ManagerRoute;
