import React, { useState } from 'react';

const CollapsibleCard = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-4 border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <button
                onClick={toggleCard}
                className="w-full px-6 py-4  text-left text-large flex justify-between items-center rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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
                <div className="p-6  border-t border-gray-300">
                    {content}
                </div>
            </div>
        </div>
    );
};

const CollapsibleCards = () => {
    return (
        <div className="p-4 mt-[4rem]">
            <h2 className="text-3xl font-bold mb-6 flex justify-start ml-56">
                Explore options near me
            </h2>
            <CollapsibleCard
                title="Popular cuisines near me"
                content="Content for popular cuisines near me. This could include a list of popular cuisines, images, or other relevant information."
            />
            <CollapsibleCard
                title="Popular restaurant types near me"
                content="Content for popular restaurant types near me. This could include a list of restaurant types, descriptions, or other relevant details."
            />
            <CollapsibleCard
                title="Cities We Deliver To"
                content="Content for cities we deliver to. This could include a list of cities, maps, or other relevant information."
            />
        </div>
    );
};

export default CollapsibleCards;
