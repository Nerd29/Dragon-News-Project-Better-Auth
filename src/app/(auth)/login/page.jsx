'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const{ register,
    handleSubmit,watch,formState: { errors },}=useForm()

    const[isShowPassword,setIsShowPassword]=useState(false)

    const handleLoginButton=async(data)=>{
        const {email,name,password,photo}=data
        console.log(data)

        const { data:res, error } = await authClient.signIn.email({
            email:email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res,error)

    }
    console.log(watch("email"))
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-4 p-10'>
            <div className='p-20 bg-white'>
                <h2 className='font-bold text-2xl mb-6'>Login Your Account</h2>

                <form className=' space-y-3' onSubmit={handleSubmit(handleLoginButton)}>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend ">Email Address</legend>
                    <input  {...register("email", { required: true })} type="email" className="input bg-base-300" placeholder="Enter your email address" />
                   {errors.email && <p className='text-red-600'>Email is required</p>}
                    
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                    <input {...register("password", { required: true })} type={isShowPassword?'text':'password'} className="input bg-base-300" placeholder="Enter your password" /><span className='absolute right-2 top-4' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEye/>:<FaEyeSlash/>}</span>
                     {errors.password && <p className='text-red-600'>password is required</p>}
                    </fieldset>
                    

                   
                   <button className='w-full btn bg-gray-900 text-white'>Login</button>
                </form>
                <p className='font-medium text-gray-500 mt-4'>Don`t have an account?
                    <Link href={"/register"}
                    > <span className='text-red-600'>Register</span></Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;