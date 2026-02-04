import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../Components/Hooks/useAuth';
import UseRole from '../Components/Hooks/UseRole';

const AdminRoute = ({ children }) => {
  const {  loading } = UseAuth();
  const {role, roleLoading} = UseRole();

  if(loading || roleLoading){
    return<p>Loading...</p>
  }

if (role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
