import React from 'react';
import locationIcon from '../../assets/icons/location.png';
import downArrow from '../../assets/icons/down-arrow1.png';
import searchIcon from '../../assets/icons/search.png';

const SearchBar = () => {
  return (
    <div className="w-[38%] h-[50px] p-2 mt-4 rounded-lg border border-gray-300 shadow-lg bg-white flex items-center justify-center relative">
      <div className="flex items-center w-[30%]">
        <div className="w-6 h-6 flex items-center justify-center">
          <img className="w-5 h-5" src={locationIcon} alt="location pointer" />
        </div>
        <input
          type="text"
          placeholder="Place..."
          className="w-[95%] mx-2 p-2 text-sm border-none outline-none text-gray-600 placeholder-gray-400"
        />
        <div className="w-6 h-6 flex items-center justify-center">
          <img className="w-4 h-4 cursor-pointer" src={downArrow} alt="down arrow" />
        </div>
      </div>
      <hr className="mx-2 h-[40%] bg-gray-300" />

      <div className="flex items-center w-[70%]">
        <div className="w-6 h-6 flex items-center justify-center">
          <img className="w-5 h-5" src={searchIcon} alt="search icon" />
        </div>
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="w-[95%] mx-2 p-2 text-sm border-none outline-none text-gray-600 placeholder-gray-400"
        />
      </div>
      {/* Dropdown Box */}
      <div className="absolute top-[65px] left-0 w-full h-[300px] overflow-y-scroll bg-white rounded-lg border border-gray-300 hidden">
        <div className="dropdown">
          {/* Dropdown content here */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
