import React, { useState } from 'react';

const FreqQuestion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-5xl text-2xl mx-auto my-2 border border-gray-100 rounded-lg shadow-md overflow-hidden">
    <button
        onClick={toggleCard}
        className="w-full px-6 py-4  text-left text-xl flex justify-between items-center rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    >
        {title}
        <span
            className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
            &#9662;
        </span>
    </button>
    <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
    >
        <div className="p-6 text-base border-t border-gray-300">
            {content}
        </div>
    </div>
</div>
  );
};

export default FreqQuestion;
