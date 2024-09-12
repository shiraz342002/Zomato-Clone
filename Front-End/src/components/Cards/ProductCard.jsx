import React from 'react';

const ProductCard = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg bg-white max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="w-[full]">
        <img className="w-[full] h-48 object-cover rounded-t-lg border-b border-gray-200" src={img} alt={title} />
      </div>
      <div className="flex-1 p-4 text-start">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base mb-4">{desc}</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Learn More 
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
