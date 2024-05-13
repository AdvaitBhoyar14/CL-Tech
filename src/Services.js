import React from 'react';
import seoImage from './assets/seo.jpg';
import ppcImage from './assets/ppc.jpg';
import socialMediaImage from './assets/social-media.jpg';
import emailMarketingImage from './assets/email-marketing.jpg';
import videoEditingImage from './assets/video-editing.jpg';
import contentCreationImage from './assets/content-creation.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Search Engine Optimization (SEO)',
      description:
        'Boost your online visibility and drive organic traffic with our expert SEO strategies.',
      image: seoImage,
    },
    {
      id: 2,
      title: 'Pay-Per-Click (PPC) Advertising',
      description:
        'Reach your target audience and generate immediate results with our PPC campaigns.',
      image: ppcImage,
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      description:
        'Engage with your audience and build a strong online presence with our social media strategies.',
      image: socialMediaImage,
    },
    {
      id: 4,
      title: 'Email Marketing',
      description:
        'Reach your customers directly with personalized email campaigns and drive conversions.',
      image: emailMarketingImage,
    },
    {
      id: 5,
      title: 'Video Editing',
      description:
        'Captivate your audience with professional video editing services for marketing and social media campaigns.',
      image: videoEditingImage,
    },
    {
      id: 6,
      title: 'Content Creation for Social Media',
      description:
        'Engage your audience with compelling content tailored for social media platforms.',
      image: contentCreationImage,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Explore our range of digital marketing services tailored to meet
            your business goals.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="pt-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="px-6 pb-6">
                <div className="flex items-center justify-center h-48 mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;