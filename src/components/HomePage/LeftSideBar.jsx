import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({allCategories,activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg text-black">All Category</h2>
      <ul className="flex flex-col gap-3 mt-6">
          {
        allCategories.news_category.map((category)=>{
          return <li key={category.category_id} className={`${activeId===category.category_id?"bg-slate-200 font-bold text-md p-3" :'font-medium text-md text-gray-400'}`}><Link href={`/category/${category.category_id}`}>{category.category_name}</Link></li>

          
        })
      }
      </ul>
        </div>
    );
};

export default LeftSideBar;