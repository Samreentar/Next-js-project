import React from 'react';

const Header = () => {
  return (
    <div className="header bg-gray-100 p-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="header-title text-xl font-bold">Lists</div>
      <div className="search-and-create flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Create List</button>
      </div>
    </div>
  );
};

export default Header;
