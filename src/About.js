import React from 'react';
import abimg from './assets/absec.jpg'; // Replace with your actual image file path

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About CL Tech
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We are a leading digital marketing agency that helps businesses
              thrive in the online world. Our team of experts combines
              creativity, data-driven insights, and cutting-edge technology to
              craft effective digital strategies tailored to your unique needs.
            </p>
            <div className="mt-8">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-10">
            <img
              src={abimg}
              alt="Digital Marketing"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;