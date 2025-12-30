import React from 'react';
import image from '../../../assets/Register.jpg'

const Register = () => {
    return (
       <div>
        <form>
           <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-amber-400">Login now!</h1>
                <img src={image} className='h-100 w-140'/>
              </div>
              <div className="card  h-100 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>   
        </form>
       </div>
    
        
    );
};

export default Register;