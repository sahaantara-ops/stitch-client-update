import React from 'react';
import image from '../../../assets/login object.jpg'
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Components/Hooks/useAuth';
import { Link, Navigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useLocation } from 'react-router';
;






const Login = () => {
  const {register,handleSubmit,watch, formState:{errors}} = useForm();
  const { signInUser, resetPassword, user } = UseAuth();

  
  const location = useLocation();
    const email = watch('email'); 

  const from = location.state || '/'
  if (user) return <Navigate to={from} replace={true}></Navigate>

  const handleLogin =(data)=>{
    console.log('form data',data);
    signInUser(data.email,data.password)
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.log(error)
    })

  }
    return (
       
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h3 className="text-5xl font-bold text-amber-400">Welcome!</h3>
      <p className="text-5xl font-bold text-amber-800">Please Login!</p>
      <img src={image} className='h-100 w-140'/>
    </div>
    <div className="card  h-110 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        
        <fieldset className="fieldset">
          <label className="label">Email</label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === 'required' && (
                <p className='text-amber-500'>Email is required.</p>
              )}
          <label className="label">Password</label>
          <input type="password" {...register('password')} className="input" placeholder="Password" />
                    {
                      errors.password?.type ==='required' && <p className='text-amber-500'>Password is required</p>
                    }
                    {
                      errors.password?.type === 'minLength'
                      && <p className='text-amber-500'>Password must be 6 characters or longer</p>
                    }
                    {
                      errors.password?.type ==='pattern' &&  <p className='text-amber-500'>Password must have at least one upper case or lower case </p>
                    }
          
          
       <p
                className="link link-hover text-blue-600 mt-2"
                onClick={() => {
                  if (!email) {
                    alert('Please enter your email first');
                    return;
                  }
                  resetPassword(email)
                    .then(() => alert('Password reset email sent'))
                    .catch(err => alert(err.message));
                }}
              >
                Forgot password?
              </p>

          <button className="btn btn-neutral bg-lime-900 mt-4">Login</button>
          <p>If you are a newcomer please, feel free to <Link className='text-amber-800 underline' to='/register'> register</Link> </p>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Login;