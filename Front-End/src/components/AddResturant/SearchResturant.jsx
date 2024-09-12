import React from 'react';

const SearchResturant = () => {
    return (
        <div className="relative w-full my-4 bg-gray-100 bottom-4">
            <div className="p-16 flex flex-col items-center justify-center">
                <div className="text-center text-4xl font-medium mb-4">
                    Already have your restaurant listed?
                </div>
                <div className="text-center text-xl font-normal text-gray-700 mb-4">
                    Search here and claim the ownership of your restaurant
                </div>
                <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-md p-4">
                    <input 
                        type="text" 
                        placeholder='Search for your restaurant e.g., GreenField Cafe'
                        className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchResturant;
