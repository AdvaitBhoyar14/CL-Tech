import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvcoBk9YYAs7IoH526ubRS3k6tY4pL-pQ",
  authDomain: "cl-tech-12579.firebaseapp.com",
  databaseURL: "https://cl-tech-12579-default-rtdb.firebaseio.com",
  projectId: "cl-tech-12579",
  storageBucket: "cl-tech-12579.appspot.com",
  messagingSenderId: "726830925012",
  appId: "1:726830925012:web:923441b83413ca23b36741",
  measurementId: "G-337WCFMHXL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(firebaseApp);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // For Realtime Database
      const contactsRef = ref(db, 'contacts');
      await push(contactsRef, formData);

      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Show a success message or perform any other action
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-lg">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Have a question or want to discuss a project? Fill out the form,
              and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-10">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-700 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
