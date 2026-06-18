import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between items-center gap-4 container mx-auto bg-gray-100 p-4 mt-4 rounded-xl'>
            <button className='btn bg-red-600 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={50}>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores temporibus eligendi cupiditate voluptatibus tempora, iste praesentium. Quibusdam mollitia fuga voluptate maiores odit fugiat dolorum, nihil porro obcaecati alias perspiciatis accusantium doloremque id ex nisi aut, nostrum saepe iure sequi similique asperiores voluptatem. Fugit asperiores cupiditate laudantium, repudiandae neque, incidunt, aspernatur animi voluptates nam eligendi at nulla? Dolore nisi libero earum perferendis id? Cum quasi voluptates ipsum distinctio obcaecati iste maxime, dolor eaque debitis nisi eligendi totam rem praesentium non exercitationem tempore autem minus hic tenetur! Libero ab neque voluptate dolorum molestiae laudantium fugit, eligendi perferendis, error non eum aliquam maiores voluptas est sint inventore asperiores obcaecati illum unde distinctio possimus hic in autem officiis. Commodi libero eum ab ullam repudiandae nisi voluptas id. Accusantium quos aspernatur, maiores fuga beatae quia nisi tenetur et voluptates at omnis illum consequatur quas pariatur obcaecati aperiam maxime dolor dolorem facilis autem! Ad voluptas sed tenetur animi nesciunt officiis porro, molestias quae itaque laudantium modi quis fugit iusto, atque veniam asperiores fugiat perspiciatis mollitia? Cupiditate, ducimus vero! Officia velit excepturi facere ipsam tempore dicta molestias modi consequatur suscipit repellendus in nam itaque incidunt porro unde animi odio quia magnam cupiditate, rem asperiores, libero reprehenderit perferendis id! Perspiciatis ea voluptatum deleniti repudiandae distinctio illo aspernatur consequatur accusamus eum architecto voluptates, magni harum. Vitae, aspernatur. Rerum iusto quaerat in quam voluptates, cum maiores optio adipisci officiis sequi modi excepturi odit eum, libero illum quae! Earum ullam fugit voluptatum commodi animi atque ducimus facere quos culpa voluptatibus.</h2>
            </Marquee>
        </div>
    );
};

export default BreakingNews;