import React from 'react';
import UseAuth from '../Components/Hooks/useAuth';
import { useNavigate } from 'react-router';

const AdminRoute = ({children}) => {
    const {user}= UseAuth();
    const Navigate = useNavigate();
  if (!user) 
    { return <Navigate to="/login" />; } 
  if (user.role !== "admin") 
    { return <Navigate to="/" />; }
  return children;
};


export default AdminRoute;