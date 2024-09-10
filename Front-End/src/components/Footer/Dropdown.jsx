import React, { useState } from 'react';
import './Dropdown.css'; // Make sure to import the CSS file

const Dropdown = ({ options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center border border-gray-300 rounded px-3 py-1 mr-4"
            >
                <span>{selected}</span>
                <span className="ml-2">&#709;</span>
            </button>
            <div className={`dropdown-menu ${isOpen ? 'open' : 'closed'}`}>
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
