import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import swimming from '@/assets/swimming.png'
import classImg from '@/assets/class.png'
import playground from '@/assets/playground.png'
import picture from '@/assets/bg.png'


const RightSideBar = () => {
    return (
        <div className=''>
            
                <h2 className='font-bold text-lg text-black'>Login With</h2>
                <div className='mt-5 flex flex-col gap-2'>
                    <button className='btn'><FcGoogle />Login With Google</button>
                    <button className=' btn'><FaGithub />Login With Github</button>
                </div>

                <div className='mt-5'>
                    <h2 className='text-lg font-bold mb-4'>Find Us On</h2>
                    <div className='flex flex-col gap-2'>
                    <button className='btn'><FaFacebook />Facebook</button>
                    <button className=' btn'><FaXTwitter />Twitter</button>
                    <button className=' btn'><FaInstagram />Instagram</button>
                    </div>
                   
                </div>
                <div className='mt-6 bg-gray-200 p-4 rounded-md'>
                    <h2 className='text-lg font-bold mb-4'>Q-Zone</h2>
                    <div className='flex flex-col gap-5'>
                 <div className='relative w-full h-36'>
                <Image
                  src={swimming}
                  alt={swimming}
                  fill
                  className='object-cover'
                />
                </div>
                <div className='relative w-full h-36'>
                    <Image
                  src={classImg}
                  alt={classImg}
                  fill
                  className='object-cover'
                />
                </div>
                <div className='relative w-full h-36'>
                <Image
                  src={playground}
                  alt={playground}
                  fill
                  className='object-cover'
                />
              </div>
              </div>
              </div>

               <div className='mt-6 overflow-hidden mb-4'>
                
                <Image
                  src={picture}
                  alt='background'
                  width={400}
                  height={300}
                  
                  className='w-full h-auto'
                />
              
              </div>
                
            </div>
            
       
    );
};

export default RightSideBar;