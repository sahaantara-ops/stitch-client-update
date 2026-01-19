import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
});


const useAxiosSecure = () => {
    const { user,logout }= UseAuth();
    const navigate = useNavigate();

    useEffect(()=>{
       const reqInterceptor=  axiosSecure.interceptors.request.use(config=>{
            config.headers.Authorization = `Bearer ${user?.accessToken}`;
            return config;
    })

    const resInterceptor = axiosSecure.interceptors.response.use((response)=>{
        return response;
    },(error) =>{
        console.log(error);

        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403){
            logout().then(()=>{
                navigate ('/login');
            })
        }

        return Promise.reject(error);
    })
    return ()=>{
        axiosSecure.interceptors.request.eject(reqInterceptor);
        axiosSecure.interceptors.response.eject(resInterceptor);
    }

    },[user])
    return axiosSecure;
};

export default useAxiosSecure;