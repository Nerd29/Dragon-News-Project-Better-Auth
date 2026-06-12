import React from 'react';

const loadingPage = () => {
    return (
        <div className='h-[85vh] flex items-center justify-center'>
           <span className="loading loading-spinner text-success"></span> 
        </div>
    );
};

export default loadingPage;