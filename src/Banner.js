import React from 'react';
import video from './assets/ba.mp4';

const Banner = () => {
  return (
    <div className="bg-gray-900 h-screen relative">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Welcome to CL Tech
        </h2>
        <p className="max-w-md mt-3 text-xl text-white">
          Innovative solutions for your business needs.
        </p>
      </div>
      <video src={video} autoPlay loop muted className="w-full h-full object-cover absolute inset-0" />
    </div>
  );
};

export default Banner;