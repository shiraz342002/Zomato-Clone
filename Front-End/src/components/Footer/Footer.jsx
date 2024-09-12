import React, { useState } from 'react';
import Gstore from '/icons/playstore.png';
import Appstore from '/icons/appstore.png';
import indianFlag from '/images/indiaflag.png';
import Facebook from '/images/facebook.png';
import Twitter from '/images/twitter.png';
import Instagram from '/images/instagram.png';
import Linkedin from '/images/linkedin.png';
import Youtube from '/images/youtube.png';
import Dropdown from './Dropdown';

const Footer = () => {
    const [country, setCountry] = useState('India');
    const [language, setLanguage] = useState('English');
    const countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];
    return (
        <div className="w-full bg-gray-100 py-8 px-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-between mb-6">
                    <img className="mb-5" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="Tomato Logo" />
                    <div className="flex flex-wrap">
                        <Dropdown options={countries} selected={country} onSelect={setCountry} />
                        <Dropdown options={languages} selected={language} onSelect={setLanguage} />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mb-6">
                    <div className="w-full md:w-1/5 mb-4 md:mb-0">
                        <div className="font-semibold mb-2 tracking-wider">ABOUT Zomato</div>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Who We Are</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Blog</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Work With Us</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Investor Relations</a>
                        <a href="#" className="block text-gray-600 text-sm">Report Fraud</a>
                    </div>
                    <div className="w-full md:w-1/5 mb-4 md:mb-0">
                        <div className="font-semibold mb-2 tracking-wider">Zomatoverse</div>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Tomato</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Feeding India</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Hyperpure</a>
                        <a href="#" className="block text-gray-600 text-sm">ZomatoLand</a>
                    </div>
                    <div className="w-full md:w-1/5 mb-4 md:mb-0">
                        <div className="font-semibold mb-2 tracking-wider">FOR RESTAURANTS</div>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Partner With Us</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Apps For You</a>
                        <div className="font-semibold mt-4 mb-2 tracking-wider">FOR ENTERPRISES</div>
                        <a href="#" className="block text-gray-600 text-sm">Zomato For Work</a>
                    </div>

                    <div className="w-full md:w-1/5 mb-4 md:mb-0">
                        <div className="font-semibold mb-2 tracking-wider">LEARN MORE</div>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Privacy</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Security</a>
                        <a href="#" className="block text-gray-600 text-sm mb-1">Terms</a>
                        <a href="#" className="block text-gray-600 text-sm">Sitemap</a>
                    </div>
                    <div className="w-full md:w-1/5">
                        <div className="font-semibold mb-2 tracking-wider">SOCIAL LINKS</div>
                        <div className="flex mb-4">
                            <a href="#" className="mr-2">
                                <img className="w-5 h-5" src={Facebook} alt="Facebook" />
                            </a>
                            <a href="#" className="mr-2">
                                <img className="w-5 h-5" src={Linkedin} alt="LinkedIn" />
                            </a>
                            <a href="#" className="mr-2">
                                <img className="w-5 h-5" src={Instagram} alt="Instagram" />
                            </a>
                            <a href="#" className="mr-2">
                                <img className="w-5 h-5" src={Twitter} alt="Twitter" />
                            </a>
                            <a href="#">
                                <img className="w-5 h-5" src={Youtube} alt="YouTube" />
                            </a>
                        </div>
                        <a href="#" className="block mb-2">
                            <img className="w-36 h-10" src={Gstore} alt="Google Play Store" />
                        </a>
                        <a href="#">
                            <img className="w-36 h-10" src={Appstore} alt="Apple App Store" />
                        </a>
                    </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="text-gray-600 text-sm text-justify">
                    By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;