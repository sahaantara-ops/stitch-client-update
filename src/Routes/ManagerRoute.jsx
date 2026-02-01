import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../Components/Hooks/useAuth';
import UseRole from '../Components/Hooks/UseRole';
 
const user = UseAuth();
const AdminRoute = ({ children }) => {
  const {  loading } = UseAuth();
  const {role, roleLoading} = UseRole();

  if(loading || roleLoading){
    return<p>Loading...</p>
  }
  if (!user) {
    return <Navigate to="/login" />; // not logged in
  }

  if (loading) {
    return <p>Loading...</p>;
  }

 

  if (role !== 'manager') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;