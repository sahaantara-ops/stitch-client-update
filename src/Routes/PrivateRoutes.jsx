import React, { Children } from 'react';
import UseAuth from '../Components/Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading}= UseAuth();
    if(loading){
        return<div>
 <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
<span className="loading loading-ball loading-xl"></span>
        </div>
    }
    console.log(user);
    if(!user){
        return <Navigate to='/login'></Navigate>

    }
    return children
};

export default PrivateRoutes;