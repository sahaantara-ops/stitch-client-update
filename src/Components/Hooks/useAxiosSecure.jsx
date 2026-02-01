import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
,
});


const useAxiosSecure = () => {
    const { user,logOut }= UseAuth();
    const navigate = useNavigate();

    useEffect(()=>{
      const reqInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {

        if (user) {
          const token = await user?.getIdToken(); 
          config.headers.authorization = `Bearer ${token}`;
        }

        return config;
    },
     (error) => Promise.reject(error)
);

 const resInterceptor = axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);

        const statusCode = error.response?.status; 
        if (statusCode === 401 || statusCode === 403) {
            logOut().then(() => {
                navigate('/login');
            });
        }

        return Promise.reject(error);
    }
);
    return ()=>{
        axiosSecure.interceptors.request.eject(reqInterceptor);
        axiosSecure.interceptors.response.eject(resInterceptor);
    }

    },[user,logOut, navigate])
    return axiosSecure;
};

export default useAxiosSecure;