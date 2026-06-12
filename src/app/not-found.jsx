import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        
             <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-4">
      <h1 className="text-8xl font-bold">404</h1>

      <h2 className="text-3xl font-semibold mt-4">
        Lost in Cyberspace 🚀
      </h2>

      <p className="text-gray-400 mt-3 text-center max-w-md">
        The page you`re looking for doesn`t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
    
    );
};

export default NotFound;