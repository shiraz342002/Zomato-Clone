import React, { useState } from 'react';
import locpin from "../assets/images/locationPin.png"
import search from "../assets/icons/search.png"
const Showcase = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-300 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-around">
        <div className="flex items-center">
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="relative flex items-center flex-grow mx-4">
          <div className="flex items-center px-4 py-2 border-l border-t border-b border-gray-300 rounded-l-lg cursor-pointer"
               onClick={toggleDropdown}>
         <img className='w-5' src={locpin} alt="" />
            <span className="mr-2 text-gray-400">&nbsp; Model Town,Sri Ganganagar</span>
            <svg
              className={`w-4 h-4 text-gray-600 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Detect Current Location</a>
                </li>
               
              </ul>
            </div>
          )}

          <div className="h-8 border-l border-gray-300"></div>

          <div className="flex items-center flex-grow relative">
            <img src={search} alt="Search Icon" className="absolute left-2 w-4 h-4 text-gray-500"/>
            <input
              type="text"
              placeholder="Search for restuarants cusine or dishes"
              className="w-full pl-8 pr-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/signup" className="text-gray-900 hover:text-gray-300">Login</a>
          <ul className="flex space-x-4">
            <li>
              <a href="/login" className="text-gray-900 hover:text-gray-300">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Showcase;
