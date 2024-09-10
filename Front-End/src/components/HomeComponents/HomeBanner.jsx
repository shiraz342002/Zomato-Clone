import React from 'react';
import Navbar from './Navbar';
import banner from '../../assets/banners/banner1.jpg';
import SearchBar from './SearchBar';

const HomeBanner = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          className="w-full h-[600px] object-cover"
          src={banner}
          alt="Banner"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <img
            className="mb-4 w-[355px]"
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="Logo"
          />
          <div className="text-4xl font-bold mb-4">
            Discover the best food & drinks in Jaisalmer
          </div>
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
