import LeftSideBar from '@/components/HomePage/LeftSideBar';
import RightSideBar from '@/components/HomePage/RightSideBar';
import React from 'react';
import { getAllCategories,getNewsByCategoryId } from '@/lib/data';
import NewsCard from '@/components/HomePage/NewsCard';
export const metadata = {
  title: "Dragon-News-Home",
  description: "Best News Portal In Bangladesh",
};

const NewsCategoryPage = async({params}) => {
    const {id}=await params;
    console.log(id)

    const allCategories=await getAllCategories()
  // console.log(allCategories.news_category)

  const news=await getNewsByCategoryId(id)
  console.log(news)

    return (
        <div>
            <div className="grid grid-cols-15 max-w-7xl mx-auto gap-4 mt-20">
    <div className=" col-span-3">
      <LeftSideBar allCategories={allCategories} activeId={id}></LeftSideBar>
      
    </div>
    <div className=" col-span-9 ">
      <h2 className="font-bold text-lg text-black">Dragon News Home</h2>

      
        <div className="space-y-4 font-medium text-lg">
          {news.length>0?
          news.map((n)=>{
            return <div key={n._id}>
             <NewsCard n={n}></NewsCard>
              </div>
          }):<h2 className='font-bold text-center text-red-600'>No news found!</h2>
        }
        </div>
      
    </div>
    <div className=" col-span-3">
         <RightSideBar></RightSideBar>
    </div>
   


  </div>;
        </div>
    );
};

export default NewsCategoryPage;