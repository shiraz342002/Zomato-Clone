import React from 'react';
import Slider from '../Slider.jsx'; 

const OurProducts = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-semibold text-4xl text-gray-900">Our Products</h1>
      </div>
      <div className="px-10 sm:px-52">
        <Slider />
      </div>
    </div>
  );
};

export default OurProducts;
