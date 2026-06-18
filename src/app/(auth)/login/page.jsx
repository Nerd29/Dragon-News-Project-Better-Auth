'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const{ register,
    handleSubmit,watch,formState: { errors },}=useForm()

    const handleLoginButton=(data)=>{
        console.log(data)

    }
    console.log(watch("email"))
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-4'>
            <div className='p-23 bg-white'>
                <h2 className='font-bold text-2xl mb-6'>Login Your Account</h2>

                <form className=' space-y-8' onSubmit={handleSubmit(handleLoginButton)}>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email Address</legend>
                    <input  {...register("email", { required: true })} type="email" className="input bg-base-300" placeholder="Enter your email address" />
                   {errors.email && <p className='text-red-600'>Email is required</p>}
                    <legend className="fieldset-legend">Password</legend>
                    <input {...register("password", { required: true })} type="password" className="input bg-base-300" placeholder="Enter your password" />
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