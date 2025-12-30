import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div>
                    <Outlet></Outlet>
                </div>
                 <div>
                    
                 </div>
            </div>
        </div>
    );
};

export default AuthLayout;