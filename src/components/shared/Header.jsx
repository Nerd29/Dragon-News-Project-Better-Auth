import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import { format } from "date-fns"

const Header = () => {
    return (
        <div className='text-center pt-[50px] space-y-2'>
            <Image className='mx-auto' src={logo} width={300} height={200} alt='logo'></Image>
            <p className='font-medium text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-gray-500'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;