import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../Components/Hooks/useAuth';



const Navbar = () => {
  const {user,logOut,loading} = useAuth();
  const handleLogout  = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error)
    })
  }
  console.log("Navbar user:", user);
console.log("Navbar loading:", loading);

  const Links= <>
        <li><NavLink to=''>Products</NavLink></li>
        <li><NavLink to="/servicesection">Services</NavLink></li>
        <li><NavLink to="/neworder">New Order</NavLink></li>
        <li><NavLink to="/Products">AllProducts</NavLink></li>
        <li><NavLink to="/dashboard/allorders">Dashboard</NavLink></li>

  
  </>
    return (
        <div className="navbar bg-base-100 margin shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        Links
       }
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ?
    <a onClick={handleLogout} className='btn'>Logout</a>
    :<Link className='btn' to="/login">Login</Link>
   }
   <img className='w-10 h-10 rounded-full ml-4' src={user?.photoURL} alt="" />
   <div className='ml-2'>
    <p>{user?.displayName}</p>
  </div>
</div>
    </div>
    );
};

export default Navbar;