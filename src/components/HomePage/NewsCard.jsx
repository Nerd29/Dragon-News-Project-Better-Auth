import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import { PiBookmarkSimpleLight } from 'react-icons/pi';
import { TiEye } from 'react-icons/ti';

const NewsCard = ({n}) => {
    return (
        <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    {/* Author part */}
    <div className='flex justify-between bg-gray-200 p-4'>

    <div className='flex items-center gap-2'>
        <Image src={n.author?.img} alt={n.author} width={40} height={40} className='rounded-full'>
        </Image>
        <div>
        <h2 className='text-lg font-semibold'>{n.author?.name}</h2>
        <p className='text-xs font-medium'>{n.author?.published_date}</p>

        </div>
    </div>

    <div className='flex gap-2 items-center'>
        <PiBookmarkSimpleLight />
        <IoShareSocial />

    </div>
    </div>
{/* details part */}
    <div className='space-y-4'>
    <h2 className="text-xl font-bold mt-4">{n.title}</h2>
    <Image src={n.image_url} alt={n.details} width={200} height={500} className='w-full rounded-xl'>
        </Image>

        <p className=' text-gray-600 line-clamp-3'>{n.details}</p>
        <Link href={`/news/${n._id}`}>
        <button className='btn bg-red-600 text-white'>Read More</button>
        </Link>


    </div>

    <div className='border-t-2 border-dashed border-gray-200 mt-4 flex items-center justify-between'>
        <div className='flex items-center gap-1 mt-4'>
            <span className='text-yellow-500'><FaStar /></span>
            <h2 >
               
            {n.rating.number}</h2>
            
        </div>
        <div className='flex items-center gap-1 mt-4'>
            <span><TiEye /></span>
            <h2 >
                {n.total_view}</h2>
        </div>
    </div>
   
  </div>
 
</div>
    );
};

export default NewsCard;