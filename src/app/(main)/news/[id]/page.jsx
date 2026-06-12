import {  getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltLeft, FaStar } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import { PiBookmarkSimpleLight } from 'react-icons/pi';
import { TiEye } from 'react-icons/ti';

export async function generateMetadata({ params }) {
  const {id} = await params
  const n=await getNewsDetailsById(id)
  return {
    title: n.title,
    description: n.description,
  }
}

const NewsDetailsPage = async({params}) => {
    const {id} =await params
    console.log(id)
    const n=await getNewsDetailsById(id)

    return (
        <div className='max-w-5xl mx-auto my-8'>
             <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    {/* Author part */}
    <div className='flex justify-between bg-gray-200 p-4'>

    <div className='flex items-center gap-2'>
        <Image src={n.author?.img} alt={n.author?.img} width={40} height={40} className='rounded-full'>
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
    <Image src={n.image_url} alt={n.details} width={300} height={400} className='w-full rounded-xl'>
        </Image>

        <p className=' text-gray-600 '>{n.details}</p>
        <Link href={`/category/${n.category_id}`}>
        <button className='btn bg-red-600 text-white'><FaLongArrowAltLeft /> All News in this Category</button>
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
        </div>
    );
};

export default NewsDetailsPage;