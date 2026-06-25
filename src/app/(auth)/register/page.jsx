'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const{ register,
    handleSubmit,watch,formState: { errors },}=useForm()

    const[isShowPassword,setIsShowPassword]=useState(false)

    const handleRegisterButton= async(data)=>{
        const {email,name,password,photo}=data
        console.log(data)


        const {data:res,error} = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL:"/",
        });
        console.log(res,error)
        if(error){
            alert(error.message)
        }
        if(res){
            alert('Sign-Up succesful')
        }

    }
    console.log(watch("email"))
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-4 p-10'>
            <div className='p-20 bg-white'>
                <h2 className='font-bold text-2xl mb-6'>Register Your Account</h2>

                <form className=' space-y-3' onSubmit={handleSubmit(handleRegisterButton)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                    <input  {...register("name", { required: true })} type="text" className="input bg-base-300" placeholder="Enter your name" />
                   {errors.email && <p className='text-red-600'>Name is required</p>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                    <input  {...register("photo", { required: true })} type="text" className="input bg-base-300" placeholder="Give your photo" />
                   {errors.email && <p className='text-red-600'>Photo is required</p>}
                    </fieldset>
                   
                     <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                    <input  {...register("email", { required: true })} type="email" className="input bg-base-300" placeholder="Enter your email address" />
                   {errors.email && <p className='text-red-600'>Email is required</p>}
                     </fieldset>
                    

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                    <input {...register("password", { required: true })} type="password" className="input bg-base-300" placeholder="Enter your password" />
                    <span className='absolute right-2 top-4' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEye/>:<FaEyeSlash/>}</span>
                     {errors.password && <p className='text-red-600'>password is required</p>}
                    </fieldset>
                    

                   
                   <button className='w-full btn bg-gray-900 text-white'>Register</button>
                </form>
                {/* <p className='font-medium text-gray-500 mt-4'>Don`t have an account?
                    <Link href={"/register"}
                    > <span className='text-red-600'>Register</span></Link> </p> */}
            </div>
        </div>
    );
};

export default RegisterPage;