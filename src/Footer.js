import React from 'react';
import imgli from './assets/lin.png'
import imgwh from './assets/whatsapp.png'
import imgig from './assets/ig.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CL Tech</h3>
            <p className="text-gray-400">
              We are a leading technology company providing innovative solutions for businesses of all sizes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#banner" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                Yash Uttarwar
              </li>
              <li className="flex items-center text-gray-400">
              cltech@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
              +91-9175056870, +91-8999480581
              </li>  
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={imgli} width="30" height="30"/> 
              </a>
              <a href="https://wa.me/918999480581" className="text-gray-400 hover:text-white">
                <img src={imgwh} width="30" height="30"/> 
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={imgig} width="30" height="30"/> 
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col items-center">
          <p className="text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} CL Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
