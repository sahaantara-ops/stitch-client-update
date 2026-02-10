import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import AuthProvider from '../Components/Context/AuthContext/authProvider';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            
            <AuthProvider>
            <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
            </AuthProvider>
            
            
        </div>
    );
};

export default RootLayout;