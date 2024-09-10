import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import mobileImg from '/images/mobile.png';
import playstoreImg from '/icons/playstore.png';
import appstoreImg from '/icons/appstore.png';

const GetTheApp = () => {
    const [inputType, setInputType] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const handleShareLink = () => {
        if (!inputValue) {
            toast.error(inputType ? 'Please enter your email id' : 'Please enter your phone number');
            return;
        }
        toast.success('Link shared successfully!');
    };

    return (
        <div className="w-full bg-[#fffbf7] flex flex-col lg:flex-row justify-center items-center py-8 px-4">
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row">
                <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
                    <img className="w-full max-w-[260px] h-auto" src={mobileImg} alt="mobile img" />
                </div>
                <div className="flex-1 px-4 lg:px-8">
                    <div className="text-2xl lg:text-3xl font-semibold mb-2">Get the Tomato App</div>
                    <div className="text-base lg:text-lg font-light mb-4 leading-6">
                        We will send you a link, open it on your phone to download the app
                    </div>
                    <div className="mb-4">
                        <div className="flex mb-4">
                            <div className="flex items-center mr-4 cursor-pointer" onClick={() => setInputType(true)}>
                                <input
                                    className="w-5 h-5 accent-red-500 cursor-pointer"
                                    type="radio"
                                    name="radio"
                                    id="email"
                                    checked={inputType}
                                    readOnly
                                />
                                <label className="ml-2 cursor-pointer" htmlFor="email">Email</label>
                            </div>
                            <div className="flex items-center cursor-pointer" onClick={() => setInputType(false)}>
                                <input
                                    className="w-5 h-5 accent-red-500 cursor-pointer"
                                    type="radio"
                                    name="radio"
                                    id="phone"
                                    checked={!inputType}
                                    readOnly
                                />
                                <label className="ml-2 cursor-pointer" htmlFor="phone">Phone</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    className="p-3 border border-gray-300 rounded-lg text-base font-light w-full"
                                    type={inputType ? 'email' : 'tel'}
                                    name={inputType ? 'email' : 'phone'}
                                    id={inputType ? 'email' : 'phone'}
                                    placeholder={inputType ? 'Email...' : 'Phone number...'}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-red-500 text-white font-medium py-2 px-4 rounded-lg cursor-pointer"
                                onClick={handleShareLink}
                            >
                                Share App Link
                            </button>
                        </div>
                    </div>
                    <div className="my-8">
                        <div className="text-base lg:text-lg font-light mb-4 text-gray-700">Download app from</div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <img className="w-[130px] h-auto rounded-lg cursor-pointer" src={appstoreImg} alt="appstore" />
                            <img className="w-[130px] h-auto rounded-lg cursor-pointer" src={playstoreImg} alt="playstore" />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default GetTheApp;
