import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to CL Tech
          </h2>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-300">
            Innovative solutions for your business needs.
          </p>
          <div className="mt-10">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;