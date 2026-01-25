import React from 'react';
import image from '../../../assets/Register.jpg'
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Components/Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const Register = () => {

    const{register,handleSubmit, formState:{errors}} = useForm();
    const{registerUser,updateUserProfile,user} = UseAuth()
      const navigate = useNavigate();
      const location = useLocation();
      const axiosSecure = useAxiosSecure();
      

  const from = location.state?.pathname || '/'
  if (user) return navigate(from);
    const handleAddUser = async (userData,refetch) => {
  try {
    const res = await axiosSecure.post('/users', userData);
    if (res.data.success) {
      toast.success(`${userData.displayName} added successfully`);
      refetch(); // refresh users list
    }
  } catch (err) {
    console.error(err);
    toast.error('Failed to add user');
  }
}

    const handleRegistration = (data)=>{
       
        const profileImg = data.photo[0];
        registerUser(data.email,data.password)
        .then(() => {
          
          const formData = new FormData();
          formData.append('image',profileImg)
          const Image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
          axios.post(Image_API_URL , formData)
          .then(res =>{
            const photoURL= res.data.data.url;

            const userInfo = {
              email:data.email,
              displayName:data.name,
              photoURL : photoURL


            }
          axiosSecure.post('/users', userInfo)
  .then(res => {
    console.log('users api response:', res.data);
    if (res.data.insertedId) {
      console.log('user created in the database');
    }
  })
  .catch(error => {
    console.error('Error saving user to DB:', error);
  });


            const userProfile = {
            displayName : data.name,
            photoURL : photoURL

            }
            console.log(userProfile)
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
                    <button onSubmit={handleAddUser} className="btn btn-neutral bg-lime-900 mt-4">Register</button>
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