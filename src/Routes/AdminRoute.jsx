import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../Components/Hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
