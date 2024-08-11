import React from 'react';
import { FaAt, FaGithub } from 'react-icons/fa';

const MainContent = () => (
  <div className="main-content flex-1 p-8 bg-gray-100 flex flex-col ml-64">
    <div className="welcome-section mb-12 mt-8 flex flex-col items-start max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to Lead Reach 👋</h1>
      <p className="text-gray-600 mb-8 text-lg">Let's show you around</p>
      <div className="feature-card bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg flex flex-col md:flex-row items-center">
        <div className="text-content flex-1 md:pr-6">
          <h2 className="text-2xl font-semibold mb-4">Optimize with Lead Search</h2>
          <p className="mb-6 text-lg">
            Streamline lead generation through

            advanced search techniques to 

            maximize efficiency and results.
          </p>
          <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg text-lg">
            Book your onboarding call →
          </button>
        </div>
        <img src="/image.png" alt="Feature Image" className="mt-4 md:mt-0 md:w-1/2 rounded-lg" />
      </div>
    </div>
    <div className="tools-section flex flex-col items-start mb-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Unlock your content's full potential</h2>
      <p className="text-gray-600 mb-8 text-lg">Dive into our tools and explore the features.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="tool-card bg-white p-6 rounded-lg shadow-md flex items-start">
          <FaAt className="text-blue-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Search an email</h3>
            <p className="text-gray-600">
              Quickly find individuals with our 'Search a person' feature for accurate contact details and professional insights.
            </p>
          </div>
        </div>
        <div className="tool-card bg-white p-6 rounded-lg shadow-md flex items-start">
          <FaGithub className="text-blue-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Start an outreach list</h3>
            <p className="text-gray-600">
              Initiate your outreach efforts by creating a targeted list for effective communication and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer bg-white w-full flex justify-between items-center p-6 shadow-md">
      <p className="text-gray-600 text-sm">
        © 2024 Lead Reach. All rights reserved.
      </p>
      <div className="flex items-center space-x-4">
        <FaGithub className="text-gray-600 text-xl" />
        <FaAt className="text-gray-600 text-xl" />
      </div>
    </footer>
  </div>
);

export default MainContent;
