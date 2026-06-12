import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-7xl mx-auto mt-5'>
           <div></div>
           <ul className=' flex justify-between items-center gap-4 text-gray-500'>
            <li>
                <NavLink href='/'>Home</NavLink>
            </li>
            <li>
                <NavLink href='/about'>About</NavLink>
            </li>
            <li>
                <NavLink href='/carrer'>Carrer</NavLink>
            </li>
            
           </ul>

           <div className='flex gap-3'>
            <Image src={user} width={40} height={40} alt='user'></Image> 
            <button className='btn bg-gray-700 text-white'><Link href="/login">Login</Link></button>          
            </div>
        </div>
    );
};

export default Navbar;