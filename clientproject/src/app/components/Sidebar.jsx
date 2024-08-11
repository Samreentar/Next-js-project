import React from 'react';
import { FaGithub, FaAt, FaHome, FaListAlt, FaEnvelope, FaSearch, FaBook, FaPhone } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar w-64 bg-white h-screen p-6 fixed top-0 left-0">
    <div className="logo mb-4">
      <img src="/path/to/logo.png" alt="Logo" className="mb-2" />
      <hr className="border-t-2 border-gray-300 mb-6" />
    </div>
    <div className="menu mb-10">
      <div className="menu-item flex items-center mb-4 cursor-pointer">
        <FaHome className="mr-2" />
        <span>Home</span>
      </div>
      <div className="menu-item flex items-center mb-4 cursor-pointer">
        <FaListAlt className="mr-2" />
        <span>Lists</span>
      </div>
    </div>
    <div className="search mb-10">
      <div className="search-item flex items-center mb-4 cursor-pointer">
        <FaEnvelope className="mr-2" />
        <span>Email Search</span>
      </div>
      <div className="search-item flex items-center mb-4 cursor-pointer">
        <FaSearch className="mr-2" />
        <span>Niche Search</span>
      </div>
    </div>
    <div className="support mb-10">
      <div className="support-item flex items-center mb-4 cursor-pointer">
        <FaBook className="mr-2" />
        <span>Docs</span>
      </div>
      <div className="support-item flex items-center mb-4 cursor-pointer">
        <FaPhone className="mr-2" />
        <span>Help</span>
      </div>
      <div className="support-item flex items-center mb-4 cursor-pointer">
        <FaPhone className="mr-2" />
        <span>Book a Call</span>
      </div>
    </div>
    <div className="trial-limits p-4 rounded-lg">
      <div className="flex justify-between mb-4">
        <span>Email Credits (ES)</span>
        <span>2000</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Niche Search Credits (NS)</span>
        <span>100</span>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded mb-4">
        Buy more credits
      </button>
      <div className="trial-end text-center">
        <span>
          Your trial ends in: <span className="text-blue-500">7 days</span>
        </span>
        <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded">
          Select a plan
        </button>
      </div>
    </div>
  </div>
);

export default Sidebar;
