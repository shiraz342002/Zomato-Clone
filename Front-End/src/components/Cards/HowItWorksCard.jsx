import React from 'react';

const HowItWorksCard = ({ step, title, tag, img, color }) => {
  return (
    <div className="w-full sm:w-[250px] h-auto sm:h-[300px] m-4 p-4 border border-gray-200 rounded-lg bg-white shadow-lg">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div
          className="w-[60%] h-[50%] flex items-center justify-center rounded-full"
          style={{ backgroundColor: color }}
        >
          <img className="w-16 h-16" src={img} alt="icon" />
        </div>
        <div className="text-center mt-4">
          <div className="text-lg font-semibold  md:text-xl">Step {step}</div>
          <div className="text-base font-medium my-2  md:text-base">{title}</div>
          <div className="text-sm  md:text-sm">{tag}</div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
