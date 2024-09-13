import React from 'react';
import starIcon from '../assets/icons/star.png';

const RatingUtil = ({ rating, count, txt }) => {
  return (
    <div className="flex items-center space-x-4 mx-5 ">
      <div className="flex items-center bg-green-500 p-1">
        <div className="text-xl font-semibold text-white ">{rating}</div>
        <img src={starIcon} alt="Star Icon" className="w-4 h-4 ml-1" />
      </div>
     
      <div className="flex flex-col text-gray-700">
        <div className="font-semibold">{count}</div>
        <div className="text-sm">{txt}</div>
      </div>
    </div>
  );
};

export default RatingUtil;
