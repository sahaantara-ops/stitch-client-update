import React from 'react';
import image from '../../../assets/Register.jpg'
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Components/Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const{register,handleSubmit, formState:{errors}} = useForm();
    const{registerUser,updateUserProfile} = UseAuth()

    const handleRegistration = (data)=>{
        console.log('after register',data.photo[0]);
        const profileImg = data.photo[0];
        registerUser(data.email,data.password)
        .then(result => {
          console.log(result.user)
          const formData = new FormData();
          formData.append('image',profileImg)
          const Image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
          axios.post(Image_API_URL , formData)
          .then(res =>{
            console.log('after image upload', res.data.data.url)

            const userProfile = {
              displayName : data.name,
              photoURL : res.data.data.url

            }
            updateUserProfile(userProfile)
            .then(()=>{
              console.log('user profile updated successfully')
            })
            .catch(error => console.log(error))
          })
        })
        .catch(error=>{
          console.log(error)
        })

    }
    return (
       <div>
        <form onSubmit={handleSubmit(handleRegistration)}>
           <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-amber-400">Please Register!</h1>
                <img src={image} className='h-100 w-140'/>
              </div>
              <div className="card  h-150 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body p-10">
                  <fieldset className="fieldset">
      
                    {/* Email */}

                    <label className="label">Email</label>
                    <input type="email"{...register('email',{required:true})} className="input " placeholder="Email" />
                   
                    {errors.email?.type==='required'&&<p className='text-amber-500'>Email is required.</p>}
                     
                     {/* Name */}

                    <label className="label">Name</label>
                    <input type="text"{...register('name',{required:true})} className="input" placeholder="YourName" />
                   
                    {errors.email?.type==='required'&&<p className='text-amber-500'>Name is required.</p>}
                       

                     {/* Roll */}

                     <label className="form-control w-full">
                    <span className="label-text">Select Role</span>
                   <select
                  {...register("role", { required: true })}
                   className="select select-bordered w-full"
                     >
                <option value="">Select your role</option>
                <option value="buyer">Buyer</option>
                <option value="manager">Manager</option>
               </select>
                </label>

              {errors.role && (
              <p className="text-red-500 text-sm">Role is required</p>
               )}


                   

                     {/* ImageURL */}

                    <label className="label">PhotoURL</label>
                    
                    <input type="file"{...register('photo',{required:true})} className="file-input file-input-ghost" placeholder="YourPhoto" />
                   
                    {errors.email?.type==='required'&&<p className='text-amber-500'>Photo is required.</p>}
                    
                    {/* Password */}
                    
                    <label className="label">Password</label>
                    <input type="password" {...register('password',{required:true, minlength:6,pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/})} className="input" placeholder="Password" />
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

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral bg-lime-900 mt-4">Register</button>
                    <p>Registered before ? then <Link className='text-amber-800 underline' to='/login'> login </Link> </p>
                  </fieldset>
                  <SocialLogin></SocialLogin>
                </div>
              </div>
            </div>
          </div>   
        </form>
       </div>
    
        
    );
};

export default Register;